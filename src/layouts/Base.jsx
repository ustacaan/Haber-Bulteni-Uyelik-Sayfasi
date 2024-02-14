import { Outlet } from "react-router-dom";
import Age from '../component/Age';


export default function Base() {
  return (
      <>
        <div className="container">
          <Age />
          <div className="content">
            <Outlet />
          </div>
        </div>
      </>
    )
}