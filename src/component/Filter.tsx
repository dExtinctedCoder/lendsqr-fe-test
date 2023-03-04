import '../styles/_utilities.scss'
import { FilterPropsType } from '../types/utilities.type'

const Filter = ({onSubmit, defaultFieldVal, filterFieldsVal, setFilterFieldsVal}: FilterPropsType) => {
  return (
    <aside className="filter__box">
      <form onSubmit={e => onSubmit(e)}>
        <div className="field__control">
          <label htmlFor="organization__filter--field">Organization</label>
          <select name="organization__filter--field" id="organization__filter--field">
            <option value="select">Select</option>
            <option value="A">ABC</option>
            <option value="B">BCD</option>
          </select>
        </div>
        <div className="field__control">
          <label htmlFor="username--filter__field">Username</label>
          <input value={filterFieldsVal.userName} onChange={e => setFilterFieldsVal({...filterFieldsVal, userName: e.target.value})} type="text" name="username" id="username--filter__field" placeholder="User" />
        </div>
        <div className="field__control">
          <label htmlFor="email--filter__field">Email</label>
          <input value={filterFieldsVal.email} onChange={e => setFilterFieldsVal({...filterFieldsVal, email: e.target.value})} type="email" name="email" id="email--filter__field" placeholder="Email" />
        </div>
        <div className="field__control">
          <label htmlFor="date--filter__field">Date</label>
          <input value={filterFieldsVal.createdAt} onChange={e => setFilterFieldsVal({...filterFieldsVal, createdAt: e.target.value})} type="date" name="" id="date--filter__field" placeholder="Date" />
        </div>
        <div className="field__control">
          <label htmlFor="phone--filter__field">Phone Number</label>
          <input value={filterFieldsVal.phoneNumber} onChange={e => setFilterFieldsVal({...filterFieldsVal, phoneNumber: e.target.value})} type="tel" name="phone" id="phone--filter__field" placeholder="Phone Number" />
        </div>
        <div className="field__control">
          <label htmlFor="status--filter__field">Status</label>
          <select name="status--filter__field" id="status--filter__field">
            <option value="select">Select</option>
            <option value="A">ABC</option>
            <option value="B">BCD</option>
          </select>
        </div>

        <div className='form--btn__box'>
          <button onClick={() => setFilterFieldsVal(defaultFieldVal)} type='reset' id='reset__btn'>Reset</button>
          <button type='submit' id='filter__btn'>Submit</button>
        </div>
      </form>
    </aside>
  )
}

export default Filter