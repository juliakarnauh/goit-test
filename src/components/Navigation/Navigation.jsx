import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import { StyledNav, NavList, Link } from "./Navigation.styled";
const Navigation = () => {
  return (
    <StyledNav>
      <NavList>
        <li>
          <Link to="/">
            <HomeIcon /> Home
          </Link>
        </li>
        <li>
          <Link to="tweets">
            <SupervisorAccountIcon /> Tweets
          </Link>
        </li>
      </NavList>
    </StyledNav>
  );
};
export default Navigation;
