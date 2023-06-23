import React from 'react';

class HeaderOfTop5 extends React.Component {

    render() {
        return (
            <>
                <thead>
                    <tr>
                        <th>{this.props.name}</th>
                        <th>{this.props.skills}</th>
                        <th>{this.props.votes}</th>
                    </tr>
                </thead>
            </>
        )
    }
}

export default HeaderOfTop5;