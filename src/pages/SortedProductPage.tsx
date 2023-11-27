import { useParams } from 'react-router-dom';
import Header from '../components/part/Header';
import ItemList from '../components/part/ItemList';
import Footer from '../components/part/Footer';

const SortedProductPage = () => {
    const productsType = useParams().type || "";

    return (
        <>
            <Header />
            <ItemList sort='complex' category={productsType}></ItemList>
            <Footer />
        </>
    );
}

export default SortedProductPage;