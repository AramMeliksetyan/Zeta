import React from 'react';
import { Line, Circle } from 'rc-progress';
import './style.scss';

export default function Progress(props) {
    return (
        <React.Fragment >
            {props.progressLineData && props.progressLineData.map((item) => (
                <div className="progress-bar" key={item.id}>
                    <div className="progress-bar-area" >
                        <Line percent={item.percent}
                            strokeWidth="1"
                            trailColor="#e9ecef"
                            trailWidth="1"
                            strokeColor="orangered"
                        />
                    </div>
                    <div className="text-area">
                        <p className="label">
                            {item.label}
                        </p>
                        <p className="percent">
                            {item.percent} %
                        </p>
                    </div>
                </div>
            ))}
            {props.progressCircleData && props.progressCircleData.map((item) => (
                <div className="progress-bar" key={item.id}>
                    <div className="progress-bar-area" >
                        <Circle percent={item.percent}
                            strokeWidth="1"
                            trailColor="#e9ecef"
                            trailWidth="1"
                            strokeColor="orangered"
                            viewBox="0 0 150 150"
                        />
                        <p className="label">
                            {item.label}
                        </p>
                        <p className="percent">
                            {item.percent} %
                        </p>
                    </div>
                </div>
            ))}

        </React.Fragment>
    )
}
