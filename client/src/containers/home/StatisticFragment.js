import React from 'react';
import { Row, Col, Card } from 'antd';

const StatisticCard = (props) => (
  <Card style={{ border: 'none', backgroundColor: '#ee741b' }}>
    <div>
      <h1 style={{ color: 'white' }}>{props.value}</h1>
      <h3 style={{ color: 'white' }}>{props.text}</h3>
    </div>
  </Card>
);

const STATISTICS_URL = '/api/v1/statistics';

export default () => {
  const [state, setState] = React.useState({
    peopleUnderRisk: '',
    evaluatedBuildings: '',
    consolidatedBuilding: '',
  });
  React.useEffect(() => {
    fetch(STATISTICS_URL)
      .then((res) => res.json())
      .then(({ peopleUnderRisk, evaluatedBuildings, consolidatedBuildings }) => {
        setState((prevState) => ({
          ...prevState,
          peopleUnderRisk,
          evaluatedBuildings,
          consolidatedBuildings,
        }));
      });
  }, []);

  return (
    <Row gutter={[8, 32]} type="flex" justify="space-around" style={{ margin: '2rem' }}>
      <Col span={8}>
        <StatisticCard value={state.peopleUnderRisk} text="oameni sub risc" />
      </Col>
      <Col span={8}>
        <StatisticCard value={state.evaluatedBuildings} text="clădiri evaluate" />
      </Col>
      <Col span={8}>
        <StatisticCard value={state.consolidatedBuilding} text="clădiri consolidate" />
      </Col>
    </Row>
  );
};
