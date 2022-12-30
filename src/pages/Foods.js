import { Row, Col } from "antd";
import { Card } from "antd";
const { Meta } = Card;



const Foods = () => {
  const category = [
    {
      id: '',
      name: " ",
      price: "",
      image:
        "",
    }
   
  ];
  const listcategory = category.map(
    (category) => {
      return (
        <div>
          <Row gutter={[16, 16]}>
            <Col xs={{ span: 24 }} sm={{ span: 5 }} md={{ span: 7 }}>
              <Card
                hoverable
                cover={
                  <img
                    alt="Pepperoni Pizza"
                    src={
                      "https://pizzaneed.com/wp-content/uploads/2019/05/different-types-of-pizza.jpg"
                    }
                  />
                }
              >
                <Meta
                  title="Pepperoni Pizza" description= "LKR2999"
                />
              </Card>
              <button>Add to cart</button>
            </Col>
            <Col xs={{ span: 24 }} sm={{ span: 5 }} md={{ span: 7 }}>
              <Card
                hoverable
                cover={
                  <img
                    alt="Cheeseburger and french fries"
                    src={
                      "https://media.istockphoto.com/id/153835617/photo/cheeseburger-and-french-fries.jpg?s=612x612&w=0&k=20&c=mqwoHXbytSeosF4p5RblhXgXq8ZeqrZXDrbCt66DFDo="
                    }
                  />
                }
              >
                <Meta title="Cheeseburger and french fries"   description= "LKR4900"/>
              </Card>
              <button>Add to cart</button>
            </Col>
            <Col xs={{ span: 24 }} sm={{ span: 5 }} md={{ span: 7 }}>
              <Card
                hoverable
                cover={
                  <img
                    alt="ESPRESSO MACCHIATO"
                    src={
                      "https://fandbrecipes.com/wp-content/uploads/2022/07/Espresso-Macchiato_Step-By-Step-Recipe.png"
                    }
                  />
                }
              >
                <Meta title="ESPRESSO MACCHIATO" description= "LKR 1500"/>
              </Card>
              <button>Add to cart</button>
            </Col>
            <Col xs={{ span: 24 }} sm={{ span: 5 }} md={{ span: 7 }}>
              <Card
                hoverable
                cover={
                  <img
                    alt="Chicken Alfredo"
                    src={
                      "https://www.budgetbytes.com/wp-content/uploads/2022/07/Chicken-Alfredo-bowl.jpg"
                    }
                  />
                }
              >
                <Meta title="Chicken Alfredo" description= "LKR 3500"/>
              </Card>
              <button>Add to cart</button>
            </Col>
            <Col xs={{ span: 24 }} sm={{ span: 5 }} md={{ span: 7 }}>
              <Card
                hoverable
                cover={
                  <img
                    alt="Baked Spaghetti"
                    src={
                      "https://tmbidigitalassetsazure.blob.core.windows.net/toh/GoogleImagesPostCard/exps18427______FM143298B03_11_5b.jpg"
                    }
                  />
                }
              >
                <Meta title="Baked Spaghetti"  description= "LKR 2500" />
              </Card>
              <button>Add to cart</button>
            </Col>
          </Row>
        </div>
      );
    });
    return (
      <section className="section">
        <h2>Foods</h2>
        {listcategory}
      </section>
    );
  };
  export default Foods;
  