import { type CSSProperties, useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import type z from 'zod';

import type { RootState } from '@/app/store';
import { Button } from '@/components/ui/button';
import { Popup } from '@/components/ui/popup';
import { TextInput } from '@/components/ui/text-input';
import { IconLoadingSpinner } from '@/components/visualizer-loading/icon-loading-spinner';
import { useSaveProjectMutation } from '@/features/visualizer/visualizerApi';
import { userDataSchema } from '@/lib/validation';
import {
  ProjectPreviewImage,
  ProjectPreviewImageBox,
  ProjectSaveErrorIcon,
  ProjectSaveErrorMessage,
  ProjectSaveErrorWrapper,
  ProjectSaveForm,
  ProjectSaveLoadingContainer,
  ProjectSaveLoadingIcon,
  ProjectSaveSuccessIcon,
  ProjectSaveSuccessMessage,
  ProjectSaveSuccessWrapper,
} from './project-save-popup.styled';

export type ProjectSavePopupProps = {
  open: boolean;
  onClose: () => void;
  loadingProjectImage: boolean;
  projectImageUrl: string;
  projectImageBlob: Blob | null;
};

export const ProjectSavePopup = ({
  open,
  onClose,
  loadingProjectImage,
  projectImageUrl,
  projectImageBlob,
}: ProjectSavePopupProps) => {
  const { subdomain, kitchenId } = useParams<{ subdomain: string; kitchenId: string }>();
  const selections = useSelector((state: RootState) => state.visualizer.selections);

  const [saveProject, { isLoading, error }] = useSaveProjectMutation();
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const form = useForm<z.infer<typeof userDataSchema>>({
    resolver: zodResolver(userDataSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      zipCode: '',
    },
    mode: 'onSubmit',
  });

  const handleSave = async (data: z.infer<typeof userDataSchema>) => {
    if (!subdomain || !kitchenId || !projectImageBlob) return;

    try {
      const selectionsArray = Object.entries(selections)
        .filter(([, value]) => value !== null)
        .map(([category, selection]) => ({
          category,
          name: selection?.name,
        }));

      const formData = new FormData();
      formData.append('name', data.name);
      formData.append('email', data.email);
      formData.append('phone', data.phone);
      formData.append('zipCode', data.zipCode);
      formData.append('selections', JSON.stringify(selectionsArray));
      formData.append(
        'image',
        new File([projectImageBlob], 'project-image.png', { type: 'image/png' })
      );

      await saveProject({ subdomain, kitchenId, formData }).unwrap();

      form.reset();
      setSuccessMessage(
        "We've sent you an email containing all the selected components and a preview image of your kitchen."
      );

      const timeoutId = setTimeout(() => {
        onClose();
        setSuccessMessage(null);
      }, 3000);

      clearTimeout(timeoutId);
    } catch {
      setSuccessMessage(null);
      form.setError('root', {
        message: 'Failed to save project. Please try again later.',
      });
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
      {loadingProjectImage ? (
        <ProjectSaveLoadingContainer>
          <ProjectSaveLoadingIcon>
            <IconLoadingSpinner size={48} />
          </ProjectSaveLoadingIcon>
        </ProjectSaveLoadingContainer>
      ) : (
        <>
          <ProjectPreviewImageBox>
            <ProjectPreviewImage
              src={projectImageUrl}
              alt="Kitchen Preview Image"
            />
          </ProjectPreviewImageBox>

          <ProjectSaveForm
            id="project-save-form"
            onSubmit={form.handleSubmit(handleSave)}
          >
            {(error || form.formState.errors.root) && (
              <ProjectSaveErrorWrapper>
                <ProjectSaveErrorIcon>⚠️</ProjectSaveErrorIcon>
                <ProjectSaveErrorMessage>
                  Failed to save project. Please try again later.
                </ProjectSaveErrorMessage>
              </ProjectSaveErrorWrapper>
            )}

            {successMessage && (
              <ProjectSaveSuccessWrapper>
                <ProjectSaveSuccessIcon>✅</ProjectSaveSuccessIcon>
                <ProjectSaveSuccessMessage>{successMessage}</ProjectSaveSuccessMessage>
              </ProjectSaveSuccessWrapper>
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
              Save Project
            </Button>
          </ProjectSaveForm>
        </>
      )}
    </Popup>
  );
};
