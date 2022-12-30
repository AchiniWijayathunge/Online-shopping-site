import { Row, Col } from "antd";
import { Card } from "antd";
const { Meta } = Card;

const Electronics = () => {
  const parts = [
    {
      id: "",

      name: "",
      price: "",
      image: "",
    },
  ];

  const listparts = parts.map((parts) => {
    return (
      <div>
        <Row gutter={[16, 16]}>
          <Col xs={{ span: 24 }} sm={{ span: 5 }} md={{ span: 7 }}>
            <Card
              hoverable
              cover={
                <img
                  alt="Apple Watch SE (2nd Gen)"
                  src={
                    "https://idealz.lk/wp-content/uploads/2022/10/Apple-Watch-SE-2-Stralight-300x300.jpg"
                  }
                />
              }
            >
              <Meta title=" Apple Watch SE (2nd Gen)" description="LKR150000" />
            </Card>
            <button>Add to cart</button>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 5 }} md={{ span: 7 }}>
            <Card
              hoverable
              cover={
                <img
                  alt="iPad Pro 2022 11-inch (WiFi Only)"
                  src={
                    "https://idealz.lk/wp-content/uploads/2022/10/iPad-Pro-2022-11-Silver.jpg"
                  }
                />
              }
            >
              <Meta
                title="iPad Pro 2022 11-inch (WiFi Only)"
                description="LKR 379990"
              />
            </Card>
            <button>Add to cart</button>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 5 }} md={{ span: 7 }}>
            <Card
              hoverable
              cover={
                <img
                  alt="iPhone 14 Pro Max 256GB"
                  src={
                    "https://idealz.lk/wp-content/uploads/2022/09/iPhone-14-Pro-Max-Purple-300x300.jpg"
                  }
                />
              }
            >
              <Meta title="iPhone 14 Pro Max 256GB " description="LKR 500000" />
            </Card>
            <button>Add to cart</button>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 5 }} md={{ span: 7 }}>
            <Card
              hoverable
              cover={
                <img
                  alt="AirPods Max"
                  src={
                    "https://idealz.lk/wp-content/uploads/2021/04/Apple-Airpods-Max-Silver-300x300.jpg"
                  }
                />
              }
            >
              <Meta title="AirPods Max" description="LKR 149000" />
            </Card>
            <button>Add to cart</button>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 5 }} md={{ span: 7 }}>
            <Card
              hoverable
              cover={
                <img
                  alt="MacBook Pro (13inch”  M2 Chip 2022)"
                  src={
                    "https://idealz.lk/wp-content/uploads/2022/06/MacBook-Pro-M2-1-300x300.jpg"
                  }
                />
              }
            >
              <Meta
                title="MacBook Pro (13inch”  M2 Chip 2022)"
                description="LKR 494000"
              />
            </Card>
            <button>Add to cart</button>
          </Col>
        </Row>
      </div>
    );
  });
  return (
    <section className="section">
      <h2>Electronics</h2>

      {listparts}
    </section>
  );
};
export default Electronics;
