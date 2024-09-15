// import { useState } from 'react'
import './../../assets/common.css'
import { RiJavaLine, RiJavascriptLine, RiHtml5Line, RiCss3Line, RiNodejsLine } from "@remixicon/react";

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
              <div>
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Work Experience</h1>
                <ul role="list" className="mt-8 space-y-8 text-gray-600">
                  <li className="pb-12 overflow-auto">
                    <div className="flex">
                      <span className="span-width-3">2024.05 ~ 재직중</span>
                      <span>
                        <strong className="font-semibold text-gray-900">나이콤</strong>
                      </span>
                    </div>
                    <div className='mb-3'>웹 개발팀 대리</div>
                    <div className='mb-3'>
                      - 키오스크 프로그램 및 자사 솔루션 개발<br />
                      - 개발 기획, 프로젝트 테크 리더<br />
                      - 클라이언트 커뮤니케이션<br />
                      - 멘토링
                    </div>
                    <div className='flex w-full-px'>
                      <div className='me-2'>Skills:</div>
                      <RiJavaLine
                        size={20}
                        color="black"
                      />
                      <div className='me-2'>Java (Spring Boot)</div>
                      <RiJavascriptLine
                        size={20}
                        color="black"
                      />
                      <div className='me-2'>Javascript (React)</div>
                      <RiNodejsLine
                        size={20}
                        color="black"
                      />
                      <div className='me-2'>Node.js (Express)</div>
                    </div>
                  </li>
                  <li className="pb-12">
                    <div className="flex">
                      <span className="span-width-3">2022.01 ~ 2024.04</span>
                      <span>
                        <strong className="font-semibold text-gray-900">엠플랜잇</strong>
                      </span>
                    </div>
                    <div className='mb-3'>연구개발전담부서 선임연구원</div>
                    <div className='mb-3'>
                      - 클라이언트 SI / SM<br />
                      - 클라이언트 커뮤니케이션 및 기술지원<br />
                      - 자사 홈페이지 및 어드민 사이트 유지보수<br />
                      - 서버 관리<br />
                      - 보안 감사 대응
                    </div>
                  </li>
                  <li className="">
                    <div className='flex'>
                      <span className="span-width-3">2017.09 ~ 2021.01</span>
                      <span>
                        <strong className="font-semibold text-gray-900">컴퓨존</strong>
                      </span>
                    </div>
                    <div className='mb-3'>전산팀 사원/팀원</div>
                    <div className='mb-3'>
                      - 자사 사이트 ERP 시스템 유지보수 / 기능 개발<br />
                      - 시스템 사고 처리<br />
                      - 테스트 작성<br />
                      - 데이터 관리<br />
                      - 영향도 분석 및 모니터링
                    </div>
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