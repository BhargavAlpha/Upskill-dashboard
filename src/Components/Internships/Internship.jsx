import React, { useEffect, useState } from "react";
import "./Internship.css";
import nameverify from "../../Assests/nameverify.svg";
import { Ripple } from "react-awesome-spinners";
// import ResumeUploader from "./Dropzone";
import UploadDropzone from "./Dropzone";

const Internship = ({ user, internships, internshipsLoading, applied }) => {
  const [internshipSelected, setInternshipSelected] = useState(
    internships[0] || {}
  );

  const [showInfo, setShowInfo] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  useEffect(() => {
    setInternshipSelected(internships[0]);
  }, [internships]);

  const handleApply = (jobId) => {
    if (!user?.userDetails?.resume) {
      alert("Upload Resume first!!!");
      return;
    }
    if (!user?.email || !jobId) {
      alert("Something is wrong please try later!!!!");
      return;
    }
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      email: user?.email,
      jobId: jobId,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    fetch(`${import.meta.env.VITE_API_URL}/jobs/apply`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.success) {
          alert("Applied Successfully!");
          window.location.reload();
        }
      })
      .catch((error) => console.error(error));
  };

  return (
    <>
      {internshipsLoading && (
        <div
          className="loader-cont"
          style={{ width: "100%", height: "calc(100vh - 133px)" }}
        >
          <Ripple color={"#49d043"} />
          Loading...
        </div>
      )}
      {console.log(applied)}
      {!internshipsLoading && (
        <div className="internship-cont">
          {isUploading && (
            <div className="intern-pop-outer">
              <UploadDropzone
                setIsUploading={setIsUploading}
                email={user?.email}
              />
            </div>
          )}
          {showInfo && (
            <div className="intern-pop-outer">
              <div className="internship-resp-pop">
                <div className="internship-resp-pop-head">
                  Responsibilites
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="36"
                    viewBox="0 0 36 36"
                    fill="none"
                    style={{ cursor: "pointer" }}
                    onClick={() => setShowInfo(false)}
                  >
                    <path
                      d="M21.182 17.9995L27.0005 12.175C27.3783 11.7456 27.5784 11.1885 27.5601 10.6169C27.5419 10.0453 27.3066 9.50212 26.9022 9.09773C26.4978 8.69335 25.9546 8.45812 25.383 8.43987C24.8114 8.42162 24.2543 8.62172 23.825 8.99949L18.0005 14.818L12.1655 8.98149C11.9565 8.77249 11.7084 8.6067 11.4353 8.49359C11.1622 8.38048 10.8696 8.32227 10.574 8.32227C10.2784 8.32227 9.98574 8.38048 9.71267 8.49359C9.4396 8.6067 9.19148 8.77249 8.98248 8.98149C8.77348 9.19048 8.6077 9.4386 8.49459 9.71167C8.38148 9.98474 8.32326 10.2774 8.32326 10.573C8.32326 10.8686 8.38148 11.1612 8.49459 11.4343C8.6077 11.7074 8.77348 11.9555 8.98248 12.1645L14.819 17.9995L9.00048 23.8225C8.77229 24.0265 8.58812 24.2749 8.45923 24.5525C8.33034 24.8301 8.25944 25.1311 8.25088 25.437C8.24232 25.743 8.29627 26.0475 8.40943 26.3318C8.52259 26.6162 8.69258 26.8745 8.90901 27.091C9.12544 27.3074 9.38374 27.4774 9.66813 27.5905C9.95251 27.7037 10.257 27.7577 10.5629 27.7491C10.8689 27.7405 11.1699 27.6696 11.4475 27.5407C11.7251 27.4118 11.9735 27.2277 12.1775 26.9995L18.0005 21.181L23.8175 26.9995C24.2396 27.4216 24.8121 27.6587 25.409 27.6587C26.0059 27.6587 26.5784 27.4216 27.0005 26.9995C27.4226 26.5774 27.6597 26.0049 27.6597 25.408C27.6597 24.8111 27.4226 24.2386 27.0005 23.8165L21.182 17.9995Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div className="internship-resp-pop-inner">
                  <div className="inter-resp-pop-points">
                    Required Skills
                    <ul>
                      {internshipSelected?.skillsreq
                        ?.split(".")
                        ?.map((skill, index) => {
                          return (
                            <div key={index}>{skill && <li>{skill}.</li>}</div>
                          );
                        })}
                    </ul>
                  </div>
                  <div className="inter-resp-pop-points">
                    The Role
                    <ul>
                      {internshipSelected?.responsiblities
                        ?.split(".")
                        ?.map((skill, index) => {
                          return (
                            <div key={index}>{skill && <li>{skill}.</li>}</div>
                          );
                        })}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div className="internship-left-cont">
            {internships?.map((internship, index) => {
              return (
                <div key={index}>
                  <div className="intern-card">
                    <div className="intern-card-top">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="15"
                        viewBox="0 0 14 15"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_524_1036)">
                          <path
                            d="M9.78542 2.33618C9.34967 1.96635 8.89292 1.57785 8.428 1.15552C8.21623 0.962362 7.96462 0.818096 7.69094 0.732919C7.41727 0.647743 7.12822 0.623737 6.84425 0.662599C6.56803 0.698726 6.30311 0.795024 6.06816 0.944699C5.83322 1.09437 5.63398 1.29378 5.4845 1.52885V1.52885C4.93034 2.43917 4.51252 3.42575 4.24433 4.45718C4.11698 4.28784 3.95367 4.14883 3.76617 4.05015C3.57866 3.95147 3.37162 3.89557 3.15993 3.88648C2.94824 3.87739 2.73716 3.91533 2.54189 3.99756C2.34661 4.0798 2.17199 4.2043 2.03058 4.3621C1.04176 5.37334 0.494247 6.7354 0.508082 8.14968C0.494935 9.585 0.962371 10.9835 1.83596 12.1224C2.70955 13.2613 3.93907 14.0752 5.32875 14.4345C5.87347 14.5731 6.43326 14.6436 6.99533 14.6445C7.84826 14.6457 8.69304 14.4786 9.48134 14.153C10.2696 13.8273 10.986 13.3494 11.5894 12.7465C12.1928 12.1437 12.6714 11.4279 12.9979 10.6399C13.3243 9.85189 13.4922 9.00728 13.4919 8.15435C13.4919 5.48618 11.7746 4.02785 9.78542 2.33618ZM9.91258 11.8947C9.7457 12.0231 9.5703 12.14 9.38758 12.2447C9.55497 11.8952 9.64264 11.5128 9.64425 11.1253C9.64425 10.0012 8.86083 8.69627 7.89425 7.55235C7.78335 7.42257 7.64565 7.31837 7.49062 7.24693C7.33559 7.17548 7.16691 7.13848 6.99621 7.13848C6.8255 7.13848 6.65683 7.17548 6.5018 7.24693C6.34677 7.31837 6.20906 7.42257 6.09817 7.55235C4.72617 9.16118 3.86692 10.9007 4.66783 12.3112C3.93127 11.8969 3.31928 11.2927 2.89566 10.5615C2.47203 9.83026 2.25226 8.99881 2.25925 8.15377C2.24115 7.32614 2.51941 6.51929 3.04383 5.87877C3.12628 6.0141 3.21475 6.14496 3.30925 6.27135C3.46531 6.48207 3.67971 6.64244 3.92593 6.73264C4.17215 6.82283 4.43941 6.8389 4.69467 6.77885C4.9536 6.72111 5.19038 6.58992 5.37662 6.40099C5.56286 6.21206 5.69065 5.97342 5.74467 5.71368C5.96025 4.56878 6.37296 3.46999 6.96442 2.46627C6.97655 2.44633 6.99313 2.42948 7.01287 2.41704C7.0326 2.40459 7.05495 2.39688 7.07817 2.39452C7.10907 2.39049 7.14048 2.39326 7.1702 2.40263C7.19992 2.412 7.22724 2.42774 7.25025 2.44877C7.73092 2.88568 8.20283 3.28702 8.65317 3.66852C10.5134 5.24818 11.7419 6.29352 11.7419 8.15202C11.7443 8.87451 11.5806 9.58789 11.2634 10.237C10.9462 10.8862 10.484 11.4537 9.91258 11.8958V11.8947Z"
                            fill="#1ABA5B"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_524_1036">
                            <rect
                              width="14"
                              height="14"
                              fill="white"
                              transform="translate(0 0.644531)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                      Posted {internship?.posted_on}
                    </div>
                    <div className="intern-card-company">
                      {internship?.role}
                      <span>{internship?.company}</span>
                    </div>
                    <div className="intern-card-hr"></div>
                    <div className="intern-card-det">
                      <div className="intern-card-det-chip">
                        <div className="intern-card-det-chip-top">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="13"
                            viewBox="0 0 12 13"
                            fill="none"
                          >
                            <g clipPath="url(#clip0_524_1045)">
                              <path
                                d="M6.00068 8.14416C6.2528 8.14456 6.50155 8.08619 6.72718 7.97366L7.60218 7.53616C7.873 7.40203 8.10077 7.19462 8.2596 6.93751C8.41843 6.68039 8.50195 6.38388 8.50068 6.08166V5.20666C8.50163 4.90446 8.41779 4.60804 8.2587 4.35111C8.0996 4.09417 7.87163 3.88701 7.60068 3.75316L6.72568 3.31566C6.49994 3.20344 6.25127 3.14504 5.99918 3.14504C5.74708 3.14504 5.49841 3.20344 5.27268 3.31566L4.40068 3.75316C4.12972 3.88701 3.90175 4.09417 3.74265 4.35111C3.58356 4.60804 3.49972 4.90446 3.50068 5.20666V6.08166C3.49972 6.38387 3.58356 6.68028 3.74265 6.93722C3.90175 7.19415 4.12972 7.40132 4.40068 7.53516L5.27568 7.97266C5.50076 8.08531 5.74898 8.14402 6.00068 8.14416V8.14416ZM5.00068 6.08266V5.23266L5.66418 5.56416C5.7686 5.61659 5.88383 5.64389 6.00068 5.64389C6.11752 5.64389 6.23275 5.61659 6.33718 5.56416L7.00068 5.23316V6.08316C7.00079 6.10648 6.99433 6.12935 6.98204 6.14916C6.96975 6.16897 6.95212 6.18491 6.93118 6.19516L6.05618 6.63266C6.03895 6.64128 6.01994 6.64577 6.00068 6.64577C5.98141 6.64577 5.96241 6.64128 5.94518 6.63266L5.07018 6.19516C5.049 6.1848 5.03122 6.16863 5.01891 6.14852C5.0066 6.12842 5.00027 6.10523 5.00068 6.08166V6.08266ZM9.25068 11.1442H7.38068C7.54305 11.0457 7.69397 10.9295 7.83068 10.7977L9.53668 9.21316C10.4731 8.26893 10.9985 6.99298 10.9985 5.66316C10.9985 4.33335 10.4731 3.05739 9.53668 2.11316C9.07324 1.64681 8.52215 1.27672 7.91513 1.02417C7.30811 0.771617 6.65714 0.641602 5.99968 0.641602C5.34221 0.641602 4.69124 0.771617 4.08422 1.02417C3.4772 1.27672 2.92611 1.64681 2.46268 2.11316C1.52421 3.06195 0.999715 4.3438 1.00393 5.67831C1.00815 7.01281 1.54073 8.29132 2.48518 9.23416L4.15418 10.7842C4.29708 10.9218 4.45527 11.0426 4.62568 11.1442H2.75068C2.55176 11.1442 2.361 11.2232 2.22035 11.3638C2.07969 11.5045 2.00068 11.6952 2.00068 11.8942C2.00068 12.0931 2.07969 12.2838 2.22035 12.4245C2.361 12.5651 2.55176 12.6442 2.75068 12.6442H9.25068C9.44959 12.6442 9.64035 12.5651 9.78101 12.4245C9.92166 12.2838 10.0007 12.0931 10.0007 11.8942C10.0007 11.6952 9.92166 11.5045 9.78101 11.3638C9.64035 11.2232 9.44959 11.1442 9.25068 11.1442ZM3.52718 8.15516C2.87043 7.49274 2.50195 6.59771 2.50195 5.66491C2.50195 4.73211 2.87043 3.83708 3.52718 3.17466C3.85105 2.84815 4.23637 2.589 4.6609 2.41215C5.08543 2.23529 5.54078 2.14424 6.00068 2.14424C6.46057 2.14424 6.91592 2.23529 7.34045 2.41215C7.76498 2.589 8.1503 2.84815 8.47418 3.17466C9.12876 3.83265 9.49799 4.72188 9.50202 5.65C9.50604 6.57812 9.14453 7.47052 8.49568 8.13416L6.79568 9.71266C6.57896 9.92003 6.28981 10.0345 5.98987 10.0317C5.68994 10.0289 5.40298 9.90904 5.19018 9.69766L3.52718 8.15516Z"
                                fill="white"
                                fillOpacity="0.5"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_524_1045">
                                <rect
                                  width="12"
                                  height="12"
                                  fill="white"
                                  transform="translate(0 0.644531)"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                          Location
                        </div>
                        {internship?.location}
                      </div>
                      <div className="intern-card-det-chip">
                        <div className="intern-card-det-chip-top">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="13"
                            viewBox="0 0 12 13"
                            fill="none"
                          >
                            <g clipPath="url(#clip0_524_1050)">
                              <path
                                d="M9.25 12.6445H2.75C2.0209 12.6437 1.32189 12.3538 0.806334 11.8382C0.29078 11.3226 0.000794085 10.6236 0 9.89453L0 3.39453C0.000794085 2.66543 0.29078 1.96642 0.806334 1.45086C1.32189 0.935312 2.0209 0.645325 2.75 0.644531L9.25 0.644531C9.9791 0.645325 10.6781 0.935312 11.1937 1.45086C11.7092 1.96642 11.9992 2.66543 12 3.39453V9.89453C11.9992 10.6236 11.7092 11.3226 11.1937 11.8382C10.6781 12.3538 9.9791 12.6437 9.25 12.6445ZM2.75 2.14453C2.41848 2.14453 2.10054 2.27623 1.86612 2.51065C1.6317 2.74507 1.5 3.06301 1.5 3.39453V9.89453C1.5 10.2261 1.6317 10.544 1.86612 10.7784C2.10054 11.0128 2.41848 11.1445 2.75 11.1445H9.25C9.58152 11.1445 9.89946 11.0128 10.1339 10.7784C10.3683 10.544 10.5 10.2261 10.5 9.89453V3.39453C10.5 3.06301 10.3683 2.74507 10.1339 2.51065C9.89946 2.27623 9.58152 2.14453 9.25 2.14453H2.75ZM3.996 5.31403V7.97503C3.996 8.09211 4.02675 8.20713 4.08517 8.30859C4.14359 8.41005 4.22763 8.49439 4.32889 8.55316C4.43014 8.61194 4.54505 8.6431 4.66213 8.64351C4.7792 8.64393 4.89433 8.61359 4.996 8.55553L7.6595 7.22503C7.76186 7.16657 7.84694 7.08209 7.90612 6.98014C7.9653 6.87819 7.99647 6.76241 7.99647 6.64453C7.99647 6.52665 7.9653 6.41087 7.90612 6.30892C7.84694 6.20698 7.76186 6.12249 7.6595 6.06403L4.996 4.73353C4.89433 4.67548 4.7792 4.64514 4.66213 4.64555C4.54505 4.64597 4.43014 4.67712 4.32889 4.7359C4.22763 4.79468 4.14359 4.87902 4.08517 4.98047C4.02675 5.08193 3.996 5.19696 3.996 5.31403V5.31403Z"
                                fill="white"
                                fillOpacity="0.5"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_524_1050">
                                <rect
                                  width="12"
                                  height="12"
                                  fill="white"
                                  transform="translate(0 0.644531)"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                          Start Date
                        </div>
                        {internship?.start_date}
                      </div>
                      <div className="intern-card-det-chip">
                        <div className="intern-card-det-chip-top">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="13"
                            height="13"
                            viewBox="0 0 13 13"
                            fill="none"
                          >
                            <g clipPath="url(#clip0_524_1060)">
                              <path
                                d="M9.88086 11.1445H3.38086C2.65176 11.1437 1.95275 10.8538 1.43719 10.3382C0.92164 9.82265 0.631653 9.12363 0.630859 8.39453L0.630859 4.89453C0.631653 4.16543 0.92164 3.46642 1.43719 2.95086C1.95275 2.43531 2.65176 2.14533 3.38086 2.14453H9.88086C10.61 2.14533 11.309 2.43531 11.8245 2.95086C12.3401 3.46642 12.6301 4.16543 12.6309 4.89453V8.39453C12.6301 9.12363 12.3401 9.82265 11.8245 10.3382C11.309 10.8538 10.61 11.1437 9.88086 11.1445V11.1445ZM3.38086 3.64453C3.04934 3.64453 2.7314 3.77623 2.49698 4.01065C2.26256 4.24507 2.13086 4.56301 2.13086 4.89453V8.39453C2.13086 8.72605 2.26256 9.044 2.49698 9.27842C2.7314 9.51284 3.04934 9.64453 3.38086 9.64453H9.88086C10.2124 9.64453 10.5303 9.51284 10.7647 9.27842C10.9992 9.044 11.1309 8.72605 11.1309 8.39453V4.89453C11.1309 4.56301 10.9992 4.24507 10.7647 4.01065C10.5303 3.77623 10.2124 3.64453 9.88086 3.64453H3.38086ZM3.38086 4.14453C3.23252 4.14453 3.08752 4.18852 2.96418 4.27093C2.84085 4.35334 2.74472 4.47047 2.68795 4.60752C2.63118 4.74456 2.61633 4.89536 2.64527 5.04085C2.67421 5.18634 2.74564 5.31997 2.85053 5.42486C2.95542 5.52975 3.08906 5.60118 3.23454 5.63012C3.38003 5.65906 3.53083 5.64421 3.66787 5.58744C3.80492 5.53068 3.92205 5.43455 4.00446 5.31121C4.08687 5.18787 4.13086 5.04287 4.13086 4.89453C4.13086 4.69562 4.05184 4.50485 3.91119 4.3642C3.77054 4.22355 3.57977 4.14453 3.38086 4.14453ZM9.13086 4.89453C9.13086 5.04287 9.17485 5.18787 9.25726 5.31121C9.33967 5.43455 9.4568 5.53068 9.59385 5.58744C9.73089 5.64421 9.88169 5.65906 10.0272 5.63012C10.1727 5.60118 10.3063 5.52975 10.4112 5.42486C10.5161 5.31997 10.5875 5.18634 10.6164 5.04085C10.6454 4.89536 10.6305 4.74456 10.5738 4.60752C10.517 4.47047 10.4209 4.35334 10.2975 4.27093C10.1742 4.18852 10.0292 4.14453 9.88086 4.14453C9.68195 4.14453 9.49118 4.22355 9.35053 4.3642C9.20988 4.50485 9.13086 4.69562 9.13086 4.89453ZM3.91136 7.86403C3.80645 7.75919 3.67281 7.68781 3.52734 7.65891C3.38187 7.63001 3.23109 7.64489 3.09408 7.70167C2.95706 7.75845 2.83995 7.85458 2.75756 7.9779C2.67517 8.10123 2.6312 8.24622 2.6312 8.39453C2.6312 8.54285 2.67517 8.68783 2.75756 8.81116C2.83995 8.93449 2.95706 9.03062 3.09408 9.0874C3.23109 9.14418 3.38187 9.15906 3.52734 9.13016C3.67281 9.10126 3.80645 9.02987 3.91136 8.92503C3.98105 8.85538 4.03634 8.77268 4.07406 8.68166C4.11178 8.59063 4.1312 8.49306 4.1312 8.39453C4.1312 8.296 4.11178 8.19843 4.07406 8.10741C4.03634 8.01638 3.98105 7.93368 3.91136 7.86403V7.86403ZM9.13086 8.39453C9.13086 8.54287 9.17485 8.68787 9.25726 8.81121C9.33967 8.93455 9.4568 9.03068 9.59385 9.08744C9.73089 9.14421 9.88169 9.15906 10.0272 9.13012C10.1727 9.10118 10.3063 9.02975 10.4112 8.92486C10.5161 8.81997 10.5875 8.68634 10.6164 8.54085C10.6454 8.39536 10.6305 8.24456 10.5738 8.10752C10.517 7.97047 10.4209 7.85334 10.2975 7.77093C10.1742 7.68852 10.0292 7.64453 9.88086 7.64453C9.68195 7.64453 9.49118 7.72355 9.35053 7.8642C9.20988 8.00485 9.13086 8.19562 9.13086 8.39453V8.39453ZM4.88086 6.64453C4.88086 6.29841 4.9835 5.96007 5.17579 5.67228C5.36808 5.3845 5.64139 5.1602 5.96116 5.02774C6.28093 4.89529 6.6328 4.86063 6.97227 4.92816C7.31174 4.99568 7.62356 5.16235 7.8683 5.40709C8.11304 5.65184 8.27971 5.96366 8.34723 6.30312C8.41476 6.64259 8.3801 6.99446 8.24765 7.31423C8.1152 7.634 7.89089 7.90731 7.60311 8.0996C7.31532 8.2919 6.97698 8.39453 6.63086 8.39453C6.16673 8.39453 5.72161 8.21016 5.39342 7.88197C5.06523 7.55378 4.88086 7.10866 4.88086 6.64453V6.64453Z"
                                fill="white"
                                fillOpacity="0.5"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_524_1060">
                                <rect
                                  width="12"
                                  height="12"
                                  fill="white"
                                  transform="translate(0.630859 0.644531)"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                          Duration
                        </div>
                        {internship?.duration}
                      </div>
                      <div className="intern-card-det-chip">
                        <div className="intern-card-det-chip-top">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="13"
                            viewBox="0 0 12 13"
                            fill="none"
                          >
                            <g clipPath="url(#clip0_524_1050)">
                              <path
                                d="M9.25 12.6445H2.75C2.0209 12.6437 1.32189 12.3538 0.806334 11.8382C0.29078 11.3226 0.000794085 10.6236 0 9.89453L0 3.39453C0.000794085 2.66543 0.29078 1.96642 0.806334 1.45086C1.32189 0.935312 2.0209 0.645325 2.75 0.644531L9.25 0.644531C9.9791 0.645325 10.6781 0.935312 11.1937 1.45086C11.7092 1.96642 11.9992 2.66543 12 3.39453V9.89453C11.9992 10.6236 11.7092 11.3226 11.1937 11.8382C10.6781 12.3538 9.9791 12.6437 9.25 12.6445ZM2.75 2.14453C2.41848 2.14453 2.10054 2.27623 1.86612 2.51065C1.6317 2.74507 1.5 3.06301 1.5 3.39453V9.89453C1.5 10.2261 1.6317 10.544 1.86612 10.7784C2.10054 11.0128 2.41848 11.1445 2.75 11.1445H9.25C9.58152 11.1445 9.89946 11.0128 10.1339 10.7784C10.3683 10.544 10.5 10.2261 10.5 9.89453V3.39453C10.5 3.06301 10.3683 2.74507 10.1339 2.51065C9.89946 2.27623 9.58152 2.14453 9.25 2.14453H2.75ZM3.996 5.31403V7.97503C3.996 8.09211 4.02675 8.20713 4.08517 8.30859C4.14359 8.41005 4.22763 8.49439 4.32889 8.55316C4.43014 8.61194 4.54505 8.6431 4.66213 8.64351C4.7792 8.64393 4.89433 8.61359 4.996 8.55553L7.6595 7.22503C7.76186 7.16657 7.84694 7.08209 7.90612 6.98014C7.9653 6.87819 7.99647 6.76241 7.99647 6.64453C7.99647 6.52665 7.9653 6.41087 7.90612 6.30892C7.84694 6.20698 7.76186 6.12249 7.6595 6.06403L4.996 4.73353C4.89433 4.67548 4.7792 4.64514 4.66213 4.64555C4.54505 4.64597 4.43014 4.67712 4.32889 4.7359C4.22763 4.79468 4.14359 4.87902 4.08517 4.98047C4.02675 5.08193 3.996 5.19696 3.996 5.31403V5.31403Z"
                                fill="white"
                                fillOpacity="0.5"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_524_1050">
                                <rect
                                  width="12"
                                  height="12"
                                  fill="white"
                                  transform="translate(0 0.644531)"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                          Stipend
                        </div>
                        {internship?.stipend}
                      </div>
                    </div>
                    <div className="intern-card-hr"></div>
                    <div className="intern-card-cta-cont">
                      <div
                        className="intern-card-cta-resp"
                        onClick={() => {
                          setInternshipSelected(internship);
                          setShowInfo(true);
                        }}
                      >
                        See Responsibilites
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="13"
                          height="13"
                          viewBox="0 0 13 13"
                          fill="none"
                        >
                          <g clipPath="url(#clip0_524_1067)">
                            <path
                              d="M6.25 0.644531C5.06331 0.644531 3.90328 0.996425 2.91658 1.65571C1.92989 2.315 1.16085 3.25207 0.706725 4.34843C0.2526 5.44479 0.13378 6.65119 0.365291 7.81507C0.596802 8.97896 1.16825 10.0481 2.00736 10.8872C2.84648 11.7263 3.91557 12.2977 5.07946 12.5292C6.24335 12.7608 7.44975 12.6419 8.5461 12.1878C9.64246 11.7337 10.5795 10.9646 11.2388 9.97795C11.8981 8.99126 12.25 7.83122 12.25 6.64453C12.2483 5.05376 11.6156 3.52864 10.4907 2.40379C9.3659 1.27895 7.84077 0.646252 6.25 0.644531V0.644531ZM6.25 11.1445C5.35999 11.1445 4.48996 10.8806 3.74994 10.3861C3.00992 9.89168 2.43314 9.18887 2.09254 8.36661C1.75195 7.54434 1.66284 6.63954 1.83647 5.76662C2.0101 4.89371 2.43869 4.09189 3.06802 3.46255C3.69736 2.83321 4.49918 2.40463 5.3721 2.231C6.24501 2.05736 7.14981 2.14648 7.97208 2.48707C8.79435 2.82767 9.49715 3.40444 9.99162 4.14447C10.4861 4.88449 10.75 5.75452 10.75 6.64453C10.7485 7.83756 10.274 8.98131 9.43038 9.8249C8.58678 10.6685 7.44303 11.1431 6.25 11.1445V11.1445Z"
                              fill="white"
                            />
                            <path
                              d="M6.02254 5.41625H5.87254C5.67603 5.41143 5.4848 5.48018 5.33634 5.60902C5.18789 5.73787 5.09291 5.91752 5.07004 6.11275C5.05696 6.30807 5.12075 6.50075 5.24781 6.64967C5.37486 6.79858 5.5551 6.89192 5.75004 6.90975V9.23475C5.75004 9.43367 5.82906 9.62443 5.96971 9.76508C6.11036 9.90574 6.30113 9.98475 6.50004 9.98475C6.69895 9.98475 6.88972 9.90574 7.03037 9.76508C7.17103 9.62443 7.25004 9.43367 7.25004 9.23475V6.64375C7.25004 6.3182 7.12072 6.00598 6.89052 5.77578C6.66031 5.54558 6.34809 5.41625 6.02254 5.41625V5.41625Z"
                              fill="white"
                            />
                            <path
                              d="M6.16464 4.87811C6.33434 4.87811 6.50023 4.82779 6.64133 4.73351C6.78242 4.63923 6.8924 4.50523 6.95734 4.34845C7.02228 4.19167 7.03927 4.01916 7.00616 3.85272C6.97305 3.68629 6.89134 3.53341 6.77134 3.41341C6.65135 3.29342 6.49847 3.2117 6.33203 3.1786C6.1656 3.14549 5.99308 3.16248 5.8363 3.22742C5.67952 3.29236 5.54552 3.40233 5.45124 3.54343C5.35696 3.68453 5.30664 3.85041 5.30664 4.02011C5.30658 4.1328 5.32872 4.2444 5.37182 4.34853C5.41491 4.45266 5.47811 4.54727 5.5578 4.62695C5.63748 4.70664 5.7321 4.76984 5.83622 4.81293C5.94035 4.85603 6.05195 4.87818 6.16464 4.87811V4.87811Z"
                              fill="white"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_524_1067">
                              <rect
                                width="12"
                                height="12"
                                fill="white"
                                transform="translate(0.25 0.644531)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      {!applied?.includes(internship.Job_id) ? (
                        <div
                          className="intern-card-cta-apply"
                          onClick={() => handleApply(internship.Job_id)}
                        >
                          Apply Now
                        </div>
                      ) : (
                        <div className="intern-card-cta-apply">
                          Already Applied
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="internship-right-cont">
            <div className="internship-card-profile">
              <div className="intern-pc-top">
                <img
                  src={`https://ui-avatars.com/api/?rounded=true&size=52&name=${user?.name}&background=random`}
                />
                <div className="intern-pc-right">
                  <div className="intern-pc-name">
                    {user?.name || "User"}
                    <img src={nameverify} alt="nameverify"></img>
                  </div>
                  <div className="intern-pc-mail">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_524_1025)">
                        <path
                          d="M9.25 0.5H2.75C2.0209 0.500794 1.32189 0.79078 0.806333 1.30633C0.29078 1.82189 0.000794085 2.5209 0 3.25L0 8.75C0.000794085 9.4791 0.29078 10.1781 0.806333 10.6937C1.32189 11.2092 2.0209 11.4992 2.75 11.5H9.25C9.9791 11.4992 10.6781 11.2092 11.1937 10.6937C11.7092 10.1781 11.9992 9.4791 12 8.75V3.25C11.9992 2.5209 11.7092 1.82189 11.1937 1.30633C10.6781 0.79078 9.9791 0.500794 9.25 0.5V0.5ZM9.25 2C9.55323 2.00101 9.84555 2.11327 10.0715 2.3155L6.8215 5.5655C6.60076 5.77633 6.30725 5.89398 6.002 5.89398C5.69675 5.89398 5.40324 5.77633 5.1825 5.5655L1.9325 2.3155C2.15742 2.11419 2.44815 2.00199 2.75 2H9.25ZM9.25 10H2.75C2.41848 10 2.10054 9.8683 1.86612 9.63388C1.6317 9.39946 1.5 9.08152 1.5 8.75V4.0085L4.1195 6.628C4.36638 6.87499 4.6595 7.07091 4.98212 7.20459C5.30474 7.33826 5.65053 7.40706 5.99975 7.40706C6.34897 7.40706 6.69476 7.33826 7.01738 7.20459C7.34 7.07091 7.63312 6.87499 7.88 6.628L10.5 4.0085V8.75C10.5 9.08152 10.3683 9.39946 10.1339 9.63388C9.89946 9.8683 9.58152 10 9.25 10Z"
                          fill="#4D4D4D"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_524_1025">
                          <rect width="12" height="12" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    {user?.email || "email@gmail.com"}
                  </div>
                  <div className="intern-pc-mail">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_524_1028)">
                        <path
                          d="M8.75043 12C4.67593 12.1145 -2.53707 4.8935 0.931433 0.969C0.943933 0.957 1.47743 0.492 1.47743 0.492C1.81227 0.182472 2.25253 0.0122695 2.70849 0.0160785C3.16446 0.0198875 3.60182 0.197421 3.93143 0.5125L5.00743 1.6715C5.32438 2.00274 5.49966 2.44452 5.49602 2.90296C5.49238 3.36139 5.31011 3.80034 4.98793 4.1265L4.79393 4.3235C5.3717 5.60294 6.3939 6.62941 7.67093 7.2125L7.87643 7.0125C8.20974 6.69505 8.65239 6.51798 9.11268 6.51798C9.57298 6.51798 10.0156 6.69505 10.3489 7.0125L11.4674 8.05C11.7987 8.37364 11.9889 8.81498 11.9966 9.27807C12.0043 9.74116 11.8288 10.1886 11.5084 10.523C11.5084 10.523 11.0434 11.056 11.0314 11.0685C10.7318 11.367 10.3759 11.6031 9.98434 11.763C9.59278 11.9229 9.17337 12.0034 8.75043 12V12ZM1.97543 2.05C-0.454067 5.059 7.32243 12.3865 9.95293 10.025C9.95293 10.025 10.4149 9.4955 10.4274 9.4835C10.4743 9.43662 10.5006 9.37304 10.5006 9.30675C10.5006 9.24046 10.4743 9.17688 10.4274 9.13L9.30843 8.093C9.15843 7.968 9.07393 7.9665 8.93493 8.073L8.36693 8.632C8.26448 8.73279 8.13522 8.80202 7.99454 8.83145C7.85387 8.86088 7.7077 8.84927 7.57343 8.798C6.57575 8.42674 5.66954 7.84532 4.91625 7.09314C4.16295 6.34097 3.58018 5.43563 3.20743 4.4385C3.15318 4.30315 3.13956 4.15491 3.16825 4.01194C3.19693 3.86897 3.26667 3.73745 3.36893 3.6335L3.92293 3.0705C3.94816 3.04809 3.96844 3.02066 3.98246 2.98996C3.99648 2.95927 4.00394 2.92599 4.00437 2.89224C4.00479 2.8585 3.99817 2.82504 3.98492 2.794C3.97167 2.76297 3.95209 2.73504 3.92743 2.712L2.85043 1.553C2.80278 1.51318 2.74171 1.49306 2.67971 1.49678C2.61772 1.5005 2.55949 1.52777 2.51693 1.573C2.50493 1.5855 1.97543 2.05 1.97543 2.05ZM12.0004 4.75C11.999 3.49067 11.4981 2.28333 10.6076 1.39285C9.7171 0.502368 8.50976 0.00145565 7.25043 0C7.05152 0 6.86076 0.0790176 6.7201 0.21967C6.57945 0.360322 6.50043 0.551088 6.50043 0.75C6.50043 0.948912 6.57945 1.13968 6.7201 1.28033C6.86076 1.42098 7.05152 1.5 7.25043 1.5C8.11206 1.50106 8.9381 1.84381 9.54736 2.45307C10.1566 3.06234 10.4994 3.88837 10.5004 4.75C10.5004 4.94891 10.5795 5.13968 10.7201 5.28033C10.8608 5.42098 11.0515 5.5 11.2504 5.5C11.4493 5.5 11.6401 5.42098 11.7808 5.28033C11.9214 5.13968 12.0004 4.94891 12.0004 4.75ZM9.50043 4.75C9.49977 4.15347 9.26251 3.58155 8.84069 3.15974C8.41888 2.73793 7.84697 2.50066 7.25043 2.5C7.05152 2.5 6.86076 2.57902 6.7201 2.71967C6.57945 2.86032 6.50043 3.05109 6.50043 3.25C6.50043 3.44891 6.57945 3.63968 6.7201 3.78033C6.86076 3.92098 7.05152 4 7.25043 4C7.44935 4 7.64011 4.07902 7.78076 4.21967C7.92142 4.36032 8.00043 4.55109 8.00043 4.75C8.00043 4.94891 8.07945 5.13968 8.2201 5.28033C8.36076 5.42098 8.55152 5.5 8.75043 5.5C8.94935 5.5 9.14011 5.42098 9.28076 5.28033C9.42141 5.13968 9.50043 4.94891 9.50043 4.75Z"
                          fill="#4D4D4D"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_524_1028">
                          <rect width="12" height="12" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    +91 {user?.mobile || "0000000000"}
                  </div>
                </div>
              </div>
              <div
                className="intern-pc-btm"
                onClick={() => setIsUploading(true)}
              >
                {!user?.userDetails?.resume ? "Upload" : "Re-upload"} Resume
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                >
                  <g clipPath="url(#clip0_524_1032)">
                    <path
                      d="M11.412 0.588488C11.0298 0.223313 10.5216 0.0195312 9.99301 0.0195312C9.46442 0.0195312 8.95618 0.223313 8.57401 0.588488L0.805507 8.35699C0.549463 8.61163 0.34644 8.9145 0.20818 9.24809C0.0699193 9.58169 -0.00083529 9.93938 7.4403e-06 10.3005V11.2505C7.4403e-06 11.4494 0.0790251 11.6402 0.219677 11.7808C0.36033 11.9215 0.551095 12.0005 0.750007 12.0005H1.70001C2.06128 12.0015 2.41917 11.9308 2.75294 11.7925C3.08671 11.6542 3.38975 11.4512 3.64451 11.195L11.412 3.42649C11.7878 3.04986 11.9989 2.53953 11.9989 2.00749C11.9989 1.47544 11.7878 0.965119 11.412 0.588488V0.588488ZM2.58301 10.1345C2.3482 10.3678 2.031 10.4993 1.70001 10.5005H1.50001V10.3005C1.50103 9.96916 1.63252 9.65157 1.86601 9.41649L7.65001 3.63399L8.36651 4.35049L2.58301 10.1345ZM10.35 2.36599L9.42701 3.29049L8.71001 2.57349L9.63501 1.65049C9.73149 1.55828 9.8598 1.50682 9.99326 1.50682C10.1267 1.50682 10.255 1.55828 10.3515 1.65049C10.4458 1.74577 10.4986 1.87449 10.4983 2.00855C10.498 2.1426 10.4447 2.2711 10.35 2.36599V2.36599Z"
                      fill="#FED12E"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_524_1032">
                      <rect width="12" height="12" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Internship;