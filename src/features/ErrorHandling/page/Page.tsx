import Menu from '../../../components/organisms/Menu.tsx';
import Footer from '../../../components/organisms/Footer.tsx';
import Template01 from '../../../components/templates/Template01';
import Client from '../organisms/Client.tsx';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from '../../../components/atoms/ErrorFallback.tsx';

function Page() {
    return (
        <>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Template01 header={<Menu ScreenName="エラー処理" />} client={<Client />} footer={<Footer />} />
        </ErrorBoundary>
        </>
    );
}

export default Page;