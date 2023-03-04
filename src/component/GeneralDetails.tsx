import { GeneralDetailsProps } from "../types/utilities.type"

const GeneralDetails = (props: GeneralDetailsProps) => {
  return (
    <section className="tab__detail">
      <section className="personal__info">
        <h5>Personal Information</h5>
        <div>
          <div className="detail__box">
            <p className="data__label">full Name</p>
            <p className="data__info">{props.firstName} {props.lastName}</p>
          </div>
          <div className="detail__box">
            <p className="data__label">Phone Number</p>
            <p className="data__info">{props.phone}</p>
          </div>
          <div className="detail__box">
            <p className="data__label">Email Address</p>
            <p className="data__info">{props.email}</p>
          </div>
          <div className="detail__box">
            <p className="data__label">Bvn</p>
            <p className="data__info">{props.bvn}</p>
          </div>
          <div className="detail__box">
            <p className="data__label">Gender</p>
            <p className="data__info">{props.gender}</p>
          </div>
          <div className="detail__box">
            <p className="data__label">Marital status</p>
            <p className="data__info">{props.maritalStatus}</p>
          </div>
          <div className="detail__box">
            <p className="data__label">children</p>
            <p className="data__info">{props.children}</p>
          </div>
          <div className="detail__box">
            <p className="data__label">Type of residence</p>
            <p className="data__info">{props.typeOfRes}t</p>
          </div>
        </div>
      </section>
      <section className="education">
        <h5>Education and Employment</h5>
        <div>
          <div className="detail__box">
            <p className="data__label">level of education</p>
            <p className="data__info">{props.levelOfEdu}</p>
          </div>
          <div className="detail__box">
            <p className="data__label">employment status</p>
            <p className="data__info">{props.employmentStatus}</p>
          </div>
          <div className="detail__box">
            <p className="data__label">sector of employment</p>
            <p className="data__info">{props.secOfEmploment}</p>
          </div>
          <div className="detail__box">
            <p className="data__label">Duration of employment</p>
            <p className="data__info">{props.durOfEmployment}</p>
          </div>
          <div className="detail__box">
            <p className="data__label">office email</p>
            <p className="data__info">{props.officeMail}</p>
          </div>
          <div className="detail__box">
            <p className="data__label">Monthly Income</p>
            <p className="data__info">{props.currency}{props.monthlyIncome[1]} - {props.currency}{props.monthlyIncome[0]}</p>
          </div>
          <div className="detail__box">
            <p className="data__label">loan repayment</p>
            <p className="data__info">{props.loanRepayment}</p>
          </div>
        </div>
      </section>
      <section className="socials">
        <h5>Socials</h5>
        <div>
          <div className="detail__box">
            <p className="data__label">Twitter</p>
            <p className="data__info">{props.twitter}</p>
          </div>
          <div className="detail__box">
            <p className="data__label">facebook</p>
            <p className="data__info">{props.facebook}</p>
          </div>
          <div className="detail__box">
            <p className="data__label">instagram</p>
            <p className="data__info">{props.instagram}</p>
          </div>
        </div>
      </section>
      <section className="guarantor">
        <h5>Guarantor</h5>
        <div>
          <div className="detail__box">
            <p className="data__label">Full name</p>
            <p className="data__info">{props.guarantor.fName} {props.guarantor.lName}</p>
          </div>
          <div className="detail__box">
            <p className="data__label">Phone Number</p>
            <p className="data__info">{props.guarantor.phone}</p>
          </div>
          <div className="detail__box">
            <p className="data__label">Email Address</p>
            <p className="data__info">{props.guarantor.email}</p>
          </div>
          <div className="detail__box">
            <p className="data__label">Gender</p>
            <p className="data__info">{props.guarantor.relationship}</p>
          </div>
        </div>
      </section>
    </section>
  )
}

export default GeneralDetails