import { LineChart, Line , XAxis , YAxis} from 'recharts';

const Chart = () => {

    const students = [
        {id: 1, name: "Alice", math: 85, english: 78},
        {id: 2, name: "Bob", math: 72, english: 81},
        {id: 3, name: "Charlie", math: 90, english: 75},
        {id: 4, name: "David", math: 65, english: 84},
        {id: 5, name: "Emma", math: 78, english: 92},
        {id: 6, name: "Frank", math: 88, english: 79},
        {id: 7, name: "Grace", math: 70, english: 85},
        {id: 8, name: "Hannah", math: 83, english: 76},
        {id: 9, name: "Ian", math: 79, english: 88},
        {id: 10,name: "Julia", math: 92 , english: 91}
      ]

      console.log(students);
    return (
        <div className='flex justify-center my-10'>
            <LineChart width={600} height={300} data={students}>
                <XAxis dataKey="name" />
                <YAxis />
                <Line dataKey='math' stroke="#8884d8"></Line>
                <Line dataKey='english'></Line>
            </LineChart>
        </div>
    );
};

export default Chart;