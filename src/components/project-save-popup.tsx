import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import styled from 'styled-components';
import type z from 'zod';

import { useSaveProjectMutation } from '@/features/visualizer/visualizerApi';
import { projectSchema } from '@/lib/validation';
import { Button } from './button';
import { Popup } from './popup';

const ErrorWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  color: #000000;
  background-color: #f3f3f3;
  padding: 1rem;
  border-radius: 0.125rem;
`;

const ErrorIcon = styled.div`
  color: #f93d5c;
  font-size: 1.25rem;
  line-height: 1.2em;
  margin-right: 0.25rem;
`;

const ErrorMessage = styled.p`
  font-size: 0.875rem;
  line-height: 1.4em;
  margin-bottom: 0;
`;

type ProjectSavePopupProps = {
  open: boolean;
  onClose: () => void;
};

export default function ProjectSavePopup({ open, onClose }: ProjectSavePopupProps) {
  const { subdomain, kitchenId } = useParams<{ subdomain: string; kitchenId: string }>();
  const [saveProject, { isLoading, error }] = useSaveProjectMutation();

  const form = useForm<z.infer<typeof projectSchema>>({
    resolver: zodResolver(projectSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      zipCode: '',
    },
    mode: 'onSubmit',
    reValidateMode: 'onChange',
  });

  const handleSave = async (data: z.infer<typeof projectSchema>) => {
    if (!subdomain || !kitchenId) return;

    try {
      await saveProject({ subdomain, kitchenId, project: data }).unwrap();
      onClose();
    } catch (err) {
      console.error('Failed to save project:', err);
    }
  };

  return (
    <Popup
      isOpen={open}
      onClose={onClose}
      title="Save Project"
      description="Enter your details to save your project."
      maxWidth="md"
    >
      <form onSubmit={form.handleSubmit(handleSave)}>
        {/* Form fields for name, email, phone, zip code */}

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti soluta obcaecati est
          enim praesentium velit molestias voluptatibus exercitationem at distinctio, quam atque
          odit incidunt sit esse sed culpa quisquam eum veritatis voluptate amet. Dicta, dolor
          dolorum est nobis magni perspiciatis facilis quidem! Quaerat aperiam doloremque at,
          corrupti id perferendis itaque distinctio assumenda, porro sit asperiores voluptate
          molestias corporis eum? Voluptatibus, ratione blanditiis nulla iure ab optio libero et
          dignissimos voluptate qui, similique voluptatum, neque quae animi quam ipsam quos. Alias
          soluta laudantium error enim expedita assumenda deserunt voluptatem. Autem blanditiis
          architecto eveniet modi magni numquam nulla ipsa laboriosam facilis voluptatem?
        </p>

        <Button
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? 'Saving...' : 'Save Project'}
        </Button>
      </form>

      {error && (
        <ErrorWrapper>
          <ErrorIcon>⚠️</ErrorIcon>
          <ErrorMessage>Failed to save project. Please try again.</ErrorMessage>
        </ErrorWrapper>
      )}
    </Popup>
  );
}
