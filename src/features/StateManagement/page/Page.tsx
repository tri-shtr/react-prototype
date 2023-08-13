import Menu from '../../../components/organisms/Menu.tsx';
import Footer from '../../../components/organisms/Footer.tsx';
import Template01 from '../../../components/templates/Template01';
import Client from '../organisms/Client.tsx';

function Page02() {
    return (
        <>
        <Template01 header={<Menu ScreenName="状態管理" />} client={<Client />} footer={<Footer />} />
        </>
    );
}

export default Page02;