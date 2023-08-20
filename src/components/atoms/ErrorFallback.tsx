import { FallbackProps } from 'react-error-boundary';

export default function ErrorFallback({ error }: FallbackProps) {
  return (
    <div>
      予期せぬエラーが発生しました。システム管理者へ連絡してください。
      <pre>{error.message}</pre>
    </div>
  )
};
