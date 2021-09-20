import { Layout_project } from '../layout/Layout_project';
import { Section } from '../styles/GlobalComponents';
import Project1_detail from '../components/ProjectPages/Project1_det';
const Project1 = () => {
  return (
    <Layout_project>
        
        <Project1_detail />

      
      
      
    </Layout_project>
  );
};
Project1.title='Bitcoin Market Prediction'
Project1.description = 'Project to use ML and EDA to prdict price and market trend for BTC'
export default Project1;
