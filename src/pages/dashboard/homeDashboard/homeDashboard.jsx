import '../../../App.css';

// Common components
import ResponsiveDrawer from '../../../pages/dashboard/Layout/DashLayout';
import AccordionCard from '../../../components/common/AccordionCard/AccordionCards';

function HomeDashBoard({ children }) {
  return (
    <>
      <ResponsiveDrawer>
        <AccordionCard />
      </ResponsiveDrawer>
    </>
  );
}

export default HomeDashBoard;
