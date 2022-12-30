import { Row, Col } from "antd";
import { Card } from "antd";
const { Meta } = Card;
const Fashion = () => {
  const items = [{}];
  const listItems = items.map((item) => {
    return (
      <div>
        <Row gutter={[16, 16]}>
          <Col xs={{ span: 24 }} sm={{ span: 5 }} md={{ span: 7 }}>
            <Card
              hoverable
              cover={
                <img
                  alt="Princess Line Midi Dress"
                  src={
                    "https://cdn.shopify.com/s/files/1/0259/7103/2124/products/18_81783bc7-99aa-483e-9486-d416188222a0_271x.progressive.jpg?v=1671003347"
                  }
                />
              }
            >
              <Meta
                title=" Midi Dress" description= "LKR 7500"
              />
            </Card>
            <button>Add to cart</button>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 5 }} md={{ span: 7 }}>
            <Card
              hoverable
              cover={
                <img
                  alt="Vneck High Low Printed Maxi Dress"
                  src={
                    "https://cdn.shopify.com/s/files/1/0259/7103/2124/products/28_1b4bf9fe-746f-42aa-af73-07cbf7b033d6_271x.progressive.jpg?v=1671000332"
                  }
                />
              }
            >
              <Meta title="Maxi Dress"   description= "LKR 8500"/>
            </Card>
            <button>Add to cart</button>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 5 }} md={{ span: 7 }}>
            <Card
              hoverable
              cover={
                <img
                  alt="Mini Skater Velvet Red Dress"
                  src={
                    "https://cdn.shopify.com/s/files/1/0259/7103/2124/products/47_d1e70adf-88e9-4568-b208-74ac5b702170_271x.progressive.jpg?v=1671789847"
                  }
                />
              }
            >
              <Meta title="Mini Skater Velvet Red Dress" description= "LKR 8500"/>
            </Card>
            <button>Add to cart</button>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 5 }} md={{ span: 7 }}>
            <Card
              hoverable
              cover={
                <img
                  alt="Frilled Side High Low Pink Maxi"
                  src={
                    "https://cdn.shopify.com/s/files/1/0259/7103/2124/products/2_591f58e4-f90a-4a63-a69a-6b8b0fde9a3d_271x.progressive.jpg?v=1671001576"
                  }
                />
              }
            >
              <Meta title="Frilled Side High Low Pink Maxi" description= "LKR 6500"/>
            </Card>
            <button>Add to cart</button>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 5 }} md={{ span: 7 }}>
            <Card
              hoverable
              cover={
                <img
                  alt="One Shoulder Flared Sleeves Maxi Dress"
                  src={
                    "https://cdn.shopify.com/s/files/1/0259/7103/2124/products/53_b6657c06-4fe0-40a2-bf69-8c4dd7349de3_271x.progressive.jpg?v=1671611793"
                  }
                />
              }
            >
              <Meta title="One Shoulder Flared Sleeves Maxi Dress"  description= "LKR 8500" />
            </Card>
            <button>Add to cart</button>
          </Col>
        </Row>
      </div>
    );
  });
  return (
    <section className="section">
      <h2>Fashion</h2>
      {listItems}
    </section>
  );
};
export default Fashion;
