import React, { useState } from "react";

// --- Sample Data for Services Accordion (Corrected for images on all items) ---
const services = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    content: {
      paragraphs: [
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      ],
      images: [
        "https://images.unsplash.com/photo-1542395669-e093bb222533?auto=format&fit=crop&w=600&h=400&q=80",
        "https://images.unsplash.com/photo-1594770135899-7f938c86d34b?auto=format&fit=crop&w=600&h=400&q=80",
        "https://images.unsplash.com/photo-1557876882-7f938c86d34b?auto=format&fit=crop&w=600&h=400&q=80",
      ],
      checklistTitle: "Lorem Ipsum Service Title",
      checklistItems: [
        "Machinery removal, installation, and alignment",
        "Installation and commissioning",
        "Bearing replacement",
        "Pump preventive maintenance",
        "Mechanical seal/ Gland packing replacement",
        "Blower preventive maintenance",
        "Equipment maintenance",
        "Agitator preventive maintenance",
        "Coating",
        "Preventive maintenance of static and rotating equipment's",
        "Shaft laser alignment",
        "Pipe and structural installation",
      ],
    },
  },
  {
    id: 2,
    title: "Sed do eiusmod tempor incididunt ut labore et dolore",
    // FIX: Added images and checklist for completeness
    content: {
      paragraphs: [
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      ],
      images: [
        "https://images.unsplash.com/photo-1542395669-e093bb222533?auto=format&fit=crop&w=600&h=400&q=80",
        "https://images.unsplash.com/photo-1594770135899-7f938c86d34b?auto=format&fit=crop&w=600&h=400&q=80",
        "https://images.unsplash.com/photo-1557876882-7f938c86d34b?auto=format&fit=crop&w=600&h=400&q=80",
      ],
      checklistTitle: "Checklist for Service Two",
      checklistItems: [
        "Dolor sit amet, consectetur adipiscing elit",
        "Eiusmod tempor incididunt ut labore et dolore",
        "Magna aliqua ut enim ad minim veniam",
        "Quis nostrud exercitation ullamco laboris",
      ],
    },
  },
  {
    id: 3,
    title: "Ut enim ad minim veniam, quis nostrud exercitation",
    content: {
      paragraphs: [
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      ],
      images: [
        "https://images.unsplash.com/photo-1581093458944-67cf0d7ab1df?auto=format&fit=crop&w=600&h=400&q=80",
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=600&h=400&q=80",
        "https://images.unsplash.com/photo-1581091215367-59ab3f4c1286?auto=format&fit=crop&w=600&h=400&q=80",
      ],
      checklistTitle: "Consectetur Adipiscing",
      checklistItems: [
        "Item one for this service",
        "Another service feature",
        "Third point of service",
        "Fourth capability here",
      ],
    },
  },
  {
    id: 4,
    title: "Duis aute irure dolor in reprehenderit in voluptate",
    content: {
      paragraphs: [
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      ],
      images: [
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&h=400&q=80",
        "https://images.unsplash.com/photo-1493612276216-ee3925520721?auto=format&fit=crop&w=600&h=400&q=80",
        "https://images.unsplash.com/photo-1511379938547-c1f694103330?auto=format&fit=crop&w=600&h=400&q=80",
      ],
      checklistTitle: "Incididunt Ut Labore",
      checklistItems: [
        "Service detail alpha",
        "Service detail beta",
        "Service detail gamma",
        "Service detail delta",
        "Service detail epsilon",
      ],
    },
  },
  {
    id: 5,
    title: "Excepteur sint occaecat cupidatat non proident",
    // FIX: Added images and checklist for completeness
    content: {
      paragraphs: [
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
      ],
      images: [
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&h=400&q=80",
        "https://images.unsplash.com/photo-1493612276216-ee3925520721?auto=format&fit=crop&w=600&h=400&q=80",
        "https://images.unsplash.com/photo-1511379938547-c1f694103330?auto=format&fit=crop&w=600&h=400&q=80",
      ],
      checklistTitle: "Magnam Aliquam",
      checklistItems: [
        "Quisquam est qui dolorem ipsum quia dolor",
        "Numquam eius modi tempora incidunt",
        "Voluptatem sequi nesciunt neque porro",
        "Ratione voluptatem sequi nesciunt",
      ],
    },
  },
];

const ServicesAccordion = () => {
  const [openServiceId, setOpenServiceId] = useState(null);

  const toggleService = (id) => {
    setOpenServiceId(openServiceId === id ? null : id);
  };

  const PlusIcon = () => (
    <svg
      className="w-6 h-6 text-blue-600"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 9v6m0-3h6m-6 0H6"
      ></path>
    </svg>
  );

  const MinusIcon = () => (
    <svg
      className="w-6 h-6 text-blue-600"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M18 12H6"
      ></path>
    </svg>
  );

  return (
    <section className="bg-neutral-50 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {services.map((service, index) => (
          <div key={service.id} className="mb-4 sm:mb-6">
            <div
              className="flex items-center justify-between py-6 cursor-pointer group"
              onClick={() => toggleService(service.id)}
              aria-expanded={openServiceId === service.id}
              aria-controls={`service-content-${service.id}`}
            >
              <div className="flex items-center">
                <span
                  className="
                    text-3xl sm:text-4xl lg:text-5xl 
                    font-extrabold text-blue-600 
                    mr-6 sm:mr-8 
                    leading-none
                  "
                >
                  {(index + 1).toString().padStart(2, "0")}
                </span>
                <h3
                  className="
                    text-xl sm:text-2xl lg:text-3xl 
                    font-bold text-[#1b2134] 
                    leading-snug 
                    group-hover:text-blue-600 transition-colors duration-300
                  "
                >
                  {service.title}
                </h3>
              </div>
              <div
                className="
                  w-10 h-10 rounded-full flex items-center justify-center 
                  border border-blue-600 text-blue-600 flex-shrink-0
                  ml-4 sm:ml-6
                "
              >
                {openServiceId === service.id ? <MinusIcon /> : <PlusIcon />}
              </div>
            </div>

            {/* Separator line below each main title (except the last one) */}
            {index < services.length && (
              <hr className="border-t border-gray-300 -mt-2 mb-4" />
            )}

            {/* Accordion Content */}
            {openServiceId === service.id && service.content && (
              <div
                id={`service-content-${service.id}`}
                className="py-4 animate-fadeIn"
              >
                {service.content.paragraphs &&
                  service.content.paragraphs.map((para, pIdx) => (
                    <p
                      key={pIdx}
                      className="text-base sm:text-lg text-gray-700 font-light leading-relaxed mb-4 max-w-4xl"
                    >
                      {para}
                    </p>
                  ))}

                {/* Image Strip: Now correctly rendered for all items */}
                {service.content.images && (
                  <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8 my-8">
                    {service.content.images.map((imgSrc, imgIdx) => (
                      <div
                        key={imgIdx}
                        className="w-full sm:w-1/3 aspect-video bg-gray-200 rounded-xl overflow-hidden shadow-md"
                      >
                        <img
                          src={imgSrc}
                          alt={`Service image ${imgIdx + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                )}

                {service.content.checklistItems && (
                  <>
                    <h4 className="text-lg sm:text-xl font-semibold text-[#1b2134] mt-8 mb-4">
                      {service.content.checklistTitle || "Onsite service"}
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 max-w-5xl">
                      {service.content.checklistItems.map((item, itemIdx) => (
                        <div
                          key={itemIdx}
                          className="flex items-start text-gray-700 font-light text-base sm:text-lg"
                        >
                          <svg
                            className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            ></path>
                          </svg>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            )}
          </div>
        ))}

        {/* Action Buttons at the bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 mt-16 sm:mt-20 lg:mt-24">
          <a
            href="/get-a-quote" // Redirect link
            className="inline-flex items-center justify-center 
                       px-8 py-3 
                       text-base font-medium text-blue-600 
                       bg-white 
                       border-2 border-blue-600 
                       rounded-full 
                       hover:bg-blue-600 hover:text-white 
                       transition duration-300 whitespace-nowrap"
          >
            GET A FREE QUOTE →
          </a>
          <a
            href="/services" // Redirect link for 'Know More'
            className="text-base font-medium text-gray-700 hover:text-blue-600 transition duration-300"
          >
            KNOW MORE
          </a>
        </div>

        {/* Final Horizontal Divider Line */}
        <div className="mt-16 sm:mt-20 lg:mt-24">
          <hr className="border-t-2 border-gray-400 border-opacity-70" />
        </div>
      </div>
    </section>
  );
};

export default ServicesAccordion;
