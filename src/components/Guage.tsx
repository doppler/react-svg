import React from 'react';

const calcXY = (angle: number, radius = 50, center = 256) => {
  const radians = (angle * Math.PI) / 180;
  const x = center + radius * Math.cos(radians);
  const y = center + radius * Math.sin(radians);
  return { x, y };
};
type Props = {
  percent: number;
  title: string;
};

const Guage = ({ percent, title }: Props) => {
  const svgWidth = 512,
    svgHeight = svgWidth,
    radius = svgWidth / 2;

  const { x: x1, y: y1 } = calcXY(0, radius - 10);
  const { x: x2, y: y2 } = calcXY(270, radius - 10);
  const { x: x3, y: y3 } = calcXY(270, radius - 110);
  const { x: x4, y: y4 } = calcXY(0, radius - 110);

  const { x: lx1, y: ly1 } = calcXY((270 / 100) * percent, radius - 110);
  const { x: lx2, y: ly2 } = calcXY((270 / 100) * percent, radius - 10);

  return (
    <svg
      id='Guage'
      xmlns='http://www.w3.org/2000/svg'
      viewBox={`0 0 ${svgWidth} ${svgHeight}`}
    >
      <circle
        id='background-circle'
        cx={radius}
        cy={radius}
        r={radius}
        fill='hsl(240, 90%, 20%)'
      />
      <g transform={`rotate(135, ${radius}, ${radius})`}>
        <path
          d={`
        M ${x1} ${y1} 
        A ${radius - 10} ${radius - 10} 1 1 1 ${x2} ${y2}
        L ${x3} ${y3}
        A ${radius - 110} ${radius - 110} 0 1 0 ${x4} ${y4}
        Z
        `}
          stroke='hsl(240, 100%, 85%)'
          fill='hsl(240, 100%, 10%)'
        />
        <line
          x1={lx1}
          y1={ly1}
          x2={lx2}
          y2={ly2}
          stroke={`hsl(30, 100%, 50%)`}
          strokeWidth={5}
        />
      </g>
      <text id='value' x={radius} y={radius}>
        {percent} %
      </text>
      <text id='title' x={radius} y={calcXY(135, radius - 10)['y']}>
        {title}
      </text>
    </svg>
  );
};

export default Guage;
