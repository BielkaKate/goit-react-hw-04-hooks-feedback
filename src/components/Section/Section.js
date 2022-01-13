import PropTypes from 'prop-types';
import styles from './Section.module.css';



const Section = ({ title, children }) => {
  return (
    <section>
      <h2 className={styles.title}>{title}</h2>
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node
}

export default Section;