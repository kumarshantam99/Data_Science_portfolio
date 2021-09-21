import { Layout_project } from '../layout/Layout_project';
import { Section } from '../styles/GlobalComponents';
import Project2_detail from '../components/ProjectPages/Project2_det';
const Project2 = () => {
  return (
    <Layout_project>
        
        <Project2_detail />

      
      
      
    </Layout_project>
  );
};
Project2.title='Time Series Modeling'
Project2.description = 'Project to use EDA, Time Series tests and forecast to prdict future price for BTC'
export default Project2;
