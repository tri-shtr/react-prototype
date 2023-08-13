import Menu from '../../../components/organisms/Menu.tsx';
import Footer from '../../../components/organisms/Footer.tsx';
import Template01 from '../../../components/templates/Template01';
import Page02Client from '../organisms/Page02Client.tsx';

function Page02() {
    return (
        <>
        <Template01 header={<Menu ScreenName="Page02" />} client={<Page02Client />} footer={<Footer />} />
        </>
    );
}

export default Page02;