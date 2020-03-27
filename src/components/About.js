import {connect} from 'san-store';
import san from 'san';

const About = san.defineComponent({
    template: `
        <div>
            <span>目前状态：{{orderState}}</span>
            <button on-click="onClick">订单更改为3</button>
        </div>
   `,

    onClick() {
        this.actions.changeOrderState(3);
    }
});

export default connect.san(
    {orderState: 'orderState'},
    {changeOrderState: 'changeOrderState'}
)(About);

