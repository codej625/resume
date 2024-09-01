// import { useState } from 'react'
import './../../assets/common.css'

export default function Main() {
  return (
    <main>
      <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="lg:max-w-lg">
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  현실에 안주하지 않고,<br />계속해서 발전 중인 개발자<br />이진우입니다.
                </h1>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-5 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="lg:max-w-lg">
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Profile</h1>
                <p className="mt-6 text-xl leading-8 text-gray-700">
                  "<b>뛰어난 1명의 개발자는 하나의 기업가치를 가진다</b>"라는<br />
                  신념을 갖고 있습니다.
                </p>
                <p className="mt-6 text-xl leading-8 text-gray-700">
                  제가 잘하는 일은 문제를 인식하고,<br />
                  다양한 역할을 수행하며 해결하는 것입니다.
                </p>
                <p className="mt-6 text-xl leading-8 text-gray-700">
                  요구사항을 파악하여 기술적인 해결책을 제시하고<br />
                  팀원, 협력부서 더 나아가 클라이언트와의<br />
                  원활한 커뮤니케이션 능력을 갖추고 있습니다.
                </p>
                <p className="mt-6 text-xl leading-8 text-gray-700">
                  항상 겸손한 마음가짐으로 여러 경험을 쌓으며<br />
                  현재도 계속해서 발전해 나가고 있습니다.
                </p>
              </div>
            </div>
          </div>

          {/* <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
            <img
              alt=""
              src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
              className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            />
          </div> */}

          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-9 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="lg:max-w-lg">
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Work Experience</h1>
                <ul role="list" className="mt-8 space-y-8 text-gray-600">
                  <li className="">
                    <div className="flex">
                      <span className="span-width-3">2024.05 ~ 재직중</span>
                      <span>
                        <strong className="ps-10 font-semibold text-gray-900">나이콤</strong>
                      </span>
                    </div>
                    <p>
                      contents
                    </p>
                  </li>
                  <li className="">
                    <div className="flex">
                      <span className="span-width-3">2022.01 ~ 2024.04</span>
                      <span>
                        <strong className="ps-10 font-semibold text-gray-900">엠플랜잇</strong>
                      </span>
                    </div>
                    <p>
                      contents
                    </p>
                  </li>
                  <li className="">
                    <div className='flex'>
                      <span className="span-width-3">2017.09 ~ 2021.01</span>
                      <span>
                        <strong className="ps-10 font-semibold text-gray-900">컴퓨존</strong>
                      </span>
                    </div>
                    <p>
                      contents
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}