import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";

const TermAndContions = () => {
  return (
    <>
      <Meta title={"Term And Conditions"} />
      <BreadCrumb title="Term And Conditions" />
      <section className="policy-wrapper py-5 home-wrapper-2">
        <div className="container-xxl"></div>
        <div className="row">
          <div className="col-12">
            <div className="policy"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TermAndContions;
