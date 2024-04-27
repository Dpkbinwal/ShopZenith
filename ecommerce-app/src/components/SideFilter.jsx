import { PlusIcon } from '@heroicons/react/24/solid'
import React from 'react'
import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const SideFilter = ({ filters, setFilters, filterParams }) => {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  return (
    <>
      {/* Mobile filter dialog */}
      <Transition.Root show={mobileFiltersOpen} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setMobileFiltersOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl">
                <div className="flex items-center justify-between px-4">
                  <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                  <button
                    type="button"
                    className="relative -mr-2 flex h-10 w-10 items-center justify-center p-2 text-gray-400 hover:text-gray-500"
                    onClick={() => setMobileFiltersOpen(false)}
                  >
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Filters */}
                <form className="mt-4">
                  {filters.map((section) => (
                    <Disclosure as="div" key={section.name} className="border-t border-gray-200 pb-4 pt-4">
                      {({ open }) => (
                        <fieldset>
                          <legend className="w-full px-2">
                            <Disclosure.Button className="flex w-full items-center justify-between p-2 text-gray-400 hover:text-gray-500">
                              <span className="text-sm font-medium text-gray-900">{section.name}</span>
                              <span className="ml-6 flex h-7 items-center">
                                <ChevronDownIcon
                                  className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-5 w-5 transform')}
                                  aria-hidden="true"
                                />
                              </span>
                            </Disclosure.Button>
                          </legend>
                          <Disclosure.Panel className="px-4 pb-2 pt-4">
                            <div className="space-y-6">
                              {section.options.map((option, optionIdx) => (
                                <div key={option.value} className="flex items-center">
                                  <input
                                    id={`${section.id}-${optionIdx}-mobile`}
                                    name={section.type === 'radio' ? 'filter-sort' : `${section.id}[]`}
                                    defaultValue={option?.value}
                                    type={section.type}
                                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                  />
                                  <label
                                    htmlFor={`${section.id}-${optionIdx}-mobile`}
                                    className="ml-3 text-sm text-gray-500"
                                  >
                                    {option.label}
                                  </label>
                                </div>
                              ))}
                            </div>
                          </Disclosure.Panel>
                        </fieldset>
                      )}
                    </Disclosure>
                  ))}
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>


      <aside>
        <h2 className="sr-only">Filters</h2>

        <button
          type="button"
          className="inline-flex items-center lg:hidden"
          onClick={() => setMobileFiltersOpen(true)}
        >
          <span className="text-sm font-medium text-gray-700">Filters</span>
          <PlusIcon className="ml-1 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
        </button>

        <div className="hidden lg:block">
          <form className="space-y-10 divide-y divide-gray-200">
            {filters.map((section, sectionIdx) => (
              <div key={section.name} className={sectionIdx === 0 ? null : 'pt-10'}>
                <fieldset>
                  <legend className="block text-sm font-medium text-gray-900">{section.name}</legend>
                  <div className="space-y-3 pt-6">
                    {section.options.map((option, optionIdx) => (
                      <div key={option.value} className="flex items-center">
                        <input
                          id={`${section.id}-${optionIdx}-mobile`}
                          name={section.type === 'radio' ? 'filter-sort' : `${section.id}[]`}
                          defaultValue={option?.value}
                          type={section.type}
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          onChange={(e) => {
                            if (section.type === 'radio') {
                              setFilters((filters) => ({
                                ...filters,
                                [section.id]: option.id,
                              }))
                            } else {
                              if (e.target.checked) {
                                setFilters((filters) => ({
                                  ...filters,
                                  [section.id]: [...(filters[section.id] || []), option.value],
                                }))
                              } else {
                                setFilters((filters) => ({
                                  ...filters,
                                  [section.id]: filters[section.id].filter((value) => value !== option.value),
                                }))
                              }
                            }
                          }
                          }
                          checked={section.type === 'radio' ? option.id === filterParams[section.id] : filterParams[section.id]?.includes(option.value)}
                        />
                        <label htmlFor={`${section.id}-${optionIdx}`} className="ml-3 text-sm text-gray-600">
                          {option.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </fieldset>
              </div>
            ))}
          </form>
        </div>
      </aside>
    </>
  )
}

export default SideFilter