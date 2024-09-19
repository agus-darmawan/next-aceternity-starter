import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('HomePage');
  return (
    <div className='flex min-h-screen items-center justify-center'>
      <h1 className='text-3xl text-blue-200 dark:text-white'>{t('title')}</h1>
    </div>
  );
}
