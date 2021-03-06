import {categories} from '../data';
import CategoryItem from './CategoryItem';
import styled from 'styled-components';

const Container = styled.div`
display: flex;
padding: 20px;
justify-content: space-between;
`;



const Categories = () => {
  return (
    <Container>
        {categories.map(item =>
            <CategoryItem item={item}/> //prop yaha use kre and category item me use krrhe hain
            
        )}
    </Container>
  )
}
export default Categories;
