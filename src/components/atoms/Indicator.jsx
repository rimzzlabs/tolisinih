const Indicator = ({ title }) => {
  switch (title) {
    case 'Very High':
    case 'very-high':
      return <span className='w-3 h-3 rounded-full mr-4 lg:mr-6 bg-red-500'></span>

    case 'High':
    case 'high':
      return <span className='w-3 h-3 rounded-full mr-4 lg:mr-6 bg-yellow-500'></span>

    case 'Medium':
    case 'normal':
      return <span className='w-3 h-3 rounded-full mr-4 lg:mr-6 bg-green-500'></span>

    case 'Low':
    case 'low':
      return <span className='w-3 h-3 rounded-full mr-4 lg:mr-6 bg-blue-500'></span>

    case 'Very Low':
    case 'very-low':
      return <span className='w-3 h-3 rounded-full mr-4 lg:mr-6 bg-purple-500'></span>

    default:
      return null
  }
}

export default Indicator
