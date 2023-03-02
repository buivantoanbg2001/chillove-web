import { useNavigate } from 'react-router-dom';
import { RouteProps, useLocation } from 'react-router';

const PrivateRoute: React.FC<RouteProps> = props => {
  const logged = localStorage.getItem('token') ? true : false;
  const navigate = useNavigate();
  const location = useLocation();

  return logged ? (props.element as React.ReactElement) : <p>Đăng nhập lại</p>;
};

export default PrivateRoute;
