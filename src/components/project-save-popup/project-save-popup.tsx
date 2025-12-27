import { zodResolver } from '@hookform/resolvers/zod';
import type { CSSProperties } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import type z from 'zod';

import { Button } from '@/components/ui/button';
import { Popup } from '@/components/ui/popup';
import { TextInput } from '@/components/ui/text-input';
import { useSaveProjectMutation } from '@/features/visualizer/visualizerApi';
import { projectSchema } from '@/lib/validation';
import {
  ProjectPreviewImage,
  ProjectPreviewImageBox,
  ProjectSaveErrorIcon,
  ProjectSaveErrorMessage,
  ProjectSaveErrorWrapper,
  ProjectSaveForm,
} from './project-save-popup.styled';

export type ProjectSavePopupProps = {
  open: boolean;
  onClose: () => void;
};

export const ProjectSavePopup = ({ open, onClose }: ProjectSavePopupProps) => {
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
      <ProjectPreviewImageBox>
        <ProjectPreviewImage
          src=""
          alt="Kitchen Preview Image"
        />
      </ProjectPreviewImageBox>

      <ProjectSaveForm
        id="project-save-form"
        onSubmit={form.handleSubmit(handleSave)}
      >
        {error && (
          <ProjectSaveErrorWrapper>
            <ProjectSaveErrorIcon>⚠️</ProjectSaveErrorIcon>
            <ProjectSaveErrorMessage>
              Failed to save project. Please try again later.
            </ProjectSaveErrorMessage>
          </ProjectSaveErrorWrapper>
        )}

        <TextInput
          type="text"
          placeholder="Enter your full name"
          label="Full Name"
          autoComplete="name"
          {...form.register('name')}
          error={form.formState.errors.name?.message}
        />

        <TextInput
          type="email"
          placeholder="Enter your email address"
          label="Email Address"
          autoComplete="email"
          {...form.register('email')}
          error={form.formState.errors.email?.message}
        />

        <TextInput
          type="tel"
          placeholder="Enter your phone number"
          label="Phone Number"
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
              '--kv-button-width': '100%',
              '--kv-button-padding': '0.875rem',
            } as CSSProperties
          }
        >
          {isLoading ? 'Saving...' : 'Save Project'}
        </Button>
      </ProjectSaveForm>
    </Popup>
  );
};
