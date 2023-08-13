import Menu from '../../../components/organisms/Menu.tsx';
import Footer from '../../../components/organisms/Footer.tsx';
import Template01 from '../../../components/templates/Template01';
import Page01Client from '../organisms/Page01Client.tsx';

function Page01() {
    return (
        <>
        <Template01 header={<Menu ScreenName="Page01" />} client={<Page01Client />} footer={<Footer />} />
        </>
    );
}

export default Page01;