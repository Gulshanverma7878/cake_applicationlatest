import React from 'react';

const VariableWidthDropdown = () => {
  const dropdownContents = [
    {
      title: "Cakes",
      width: "max-w-md", // Medium width
      sections: [
        {
          title: "Trending",
          items: [
            { name: 'Mango Cakes', href: '/mango' },
            { name: 'Chocolate Cakes', href: '/chocolate' }
          ]
        }
      ]
    },
    {
      title: "Desserts", 
      width: "max-w-sm", // Small width
      sections: [
        {
          title: "Popular",
          items: [
            { name: 'Pastries', href: '/pastries' },
            { name: 'Cookies', href: '/cookies' }
          ]
        }
      ]
    },
    {
      title: "Occasions",
      width: "max-w-xl", // Extra large width
      sections: [
        {
          title: "Events",
          items: [
            { name: 'Birthday', href: '/birthday' },
            { name: 'Anniversary', href: '/anniversary' },
            { name: 'Wedding', href: '/wedding' }
          ]
        }
      ]
    }
  ];

  return (
    <div className="flex justify-center space-x-4 p-8">
      {dropdownContents.map((menu, index) => (
        <div key={index} className="group relative">
          <button className="px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition">
            {menu.title}
          </button>
          
          <div className={`absolute left-0 mt-1 ${menu.width} w-auto min-w-[200px] 
                          opacity-0 invisible group-hover:opacity-100 group-hover:visible
                          transition-all duration-200 origin-top`}>
            <div className="bg-white shadow-lg rounded-md p-4 border border-gray-100">
              {menu.sections.map((section, secIndex) => (
                <div key={secIndex} className="mb-4 last:mb-0">
                  <h3 className="font-medium text-gray-800 mb-2">{section.title}</h3>
                  <ul className="space-y-1">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex}>
                        <a href={item.href} className="block px-2 py-1 hover:bg-gray-50 rounded">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VariableWidthDropdown;