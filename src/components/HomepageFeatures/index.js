import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Facile à utiliser',
    Svg: require('@site/static/img/facile.svg').default,
    description: (
      <>
        Ollama est la solution idéale pour installer et utiliser les LLM Open Source.
      </>
    ),
  },
  {
    title: 'Efficace',
    Svg: require('@site/static/img/efficace.svg').default,
    description: (
      <>
        Large choix, Performances⚡, paramétrages.
        Exploitez la puissance des LLM avec Ollama !
      </>
    ),
  },
  {
    title: 'Pratique',
    Svg: require('@site/static/img/pratique.svg').default,
    description: (
      <>
        Booster vos applications grace à ses scripts et ses API. Ollama est le pont entre les LLM et vos données.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
