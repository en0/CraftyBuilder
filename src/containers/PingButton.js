import { connect } from "react-redux";
import { sendPing } from "../actions/ping";
import Button from "../components/Button";

const mapStateToProps = state => ({
    value: `Ping: ${state.pings.count}`
});

const mapDispatchToProps = dispatch => ({
    onClick: () => dispatch(sendPing('abcdefg'))
});

const PingButton = connect(mapStateToProps, mapDispatchToProps)(Button);

export default PingButton;