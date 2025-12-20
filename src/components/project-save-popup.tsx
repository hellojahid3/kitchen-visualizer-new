import { zodResolver } from '@hookform/resolvers/zod';
import type { CSSProperties } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import styled from 'styled-components';
import type z from 'zod';

import { useSaveProjectMutation } from '@/features/visualizer/visualizerApi';
import { projectSchema } from '@/lib/validation';
import { Button } from './button';
import { Popup } from './popup';
import { TextInput } from './text-input';

const ProjectSaveForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
`;

const ProjectPreviewImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 200px;
  background-color: #f0f0f0;
  border-radius: 0.125rem;
  margin-bottom: 1rem;
`;

const ProjectPreviewImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  border-radius: 0.125rem;
`;

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
  display: block;
  color: #f93d5c;
  font-size: 1.25rem;
  line-height: 1em;
  margin-top: -0.25rem;
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
      description="We'll send you an email containing all the selected components and a preview image of your kitchen."
      maxWidth="md"
    >
      <ProjectPreviewImageWrapper>
        <ProjectPreviewImage
          src=""
          alt="Kitchen Preview Image"
        />
      </ProjectPreviewImageWrapper>

      <ProjectSaveForm
        id="project-save-form"
        onSubmit={form.handleSubmit(handleSave)}
      >
        {error && (
          <ErrorWrapper>
            <ErrorIcon>⚠️</ErrorIcon>
            <ErrorMessage>Failed to save project. Please try again later.</ErrorMessage>
          </ErrorWrapper>
        )}

        <TextInput
          type="text"
          placeholder="Enter your full name"
          label="Name"
          autoComplete="name"
          {...form.register('name')}
          error={form.formState.errors.name?.message}
        />

        <TextInput
          type="email"
          placeholder="Enter your email address"
          label="Email"
          autoComplete="email"
          {...form.register('email')}
          error={form.formState.errors.email?.message}
        />

        <TextInput
          type="tel"
          placeholder="Enter your phone number"
          label="Phone"
          autoComplete="tel"
          {...form.register('phone')}
          error={form.formState.errors.phone?.message}
        />

        <TextInput
          type="text"
          placeholder="Enter your zip code"
          label="Zip Code"
          {...form.register('zipCode')}
          error={form.formState.errors.zipCode?.message}
        />

        <Button
          type="submit"
          disabled={isLoading}
          style={
            {
              '--button-width': '100%',
              '--button-padding': '1rem',
            } as CSSProperties
          }
        >
          {isLoading ? 'Saving...' : 'Save Project'}
        </Button>
      </ProjectSaveForm>
    </Popup>
  );
}
