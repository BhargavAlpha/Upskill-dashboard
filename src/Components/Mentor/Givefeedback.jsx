import React, { useState } from "react";
import "../Tasks/SubmitTask.css";
const Givefeedback = ({ setGiveFeedBack, data }) => {
  const [feedback, setFeedback] = useState("");
  const [disabled, setDisabled] = useState(false);

  async function submitTask(status) {
    var response = {};
    setDisabled(true);

    if (!feedback) {
      alert("Please Provide FEEDBACK");
      return;
    }

    if (data.teamMembers.length > 0) {
      response = await fetch(
        `${import.meta.env.VITE_API_URL}/mentor/feedback`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: data.email,
            feedback,
            status,
            taskName: data.taskName,
            teamMembers: data.teamMembers,
          }),
        }
      );
    } else {
      response = await fetch(
        `${import.meta.env.VITE_API_URL}/mentor/feedback`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: data.email,
            feedback,
            status,
            taskName: data.taskName,
          }),
        }
      );
    }

    const d = await response.json();

    if (d.success) {
      alert(d.message);
      window.location.reload();
    } else {
      alert(data.error);
    }
    setDisabled(false);
  }
  return (
    <div className="subt-cont">
      <div className="subt-inner-cont">
        <div className="subt-inner-top">
          Submit Feedback
          <svg
            onClick={() => setGiveFeedBack(false)}
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
          >
            <path
              d="M28.2417 23.9995L35.9997 16.2335C36.5034 15.661 36.7702 14.9182 36.7458 14.1561C36.7215 13.394 36.4079 12.6697 35.8687 12.1305C35.3295 11.5913 34.6052 11.2777 33.8431 11.2534C33.0809 11.229 32.3382 11.4958 31.7657 11.9995L23.9997 19.7575L16.2197 11.9755C15.941 11.6969 15.6102 11.4758 15.2461 11.325C14.882 11.1742 14.4918 11.0966 14.0977 11.0966C13.7036 11.0966 13.3133 11.1742 12.9492 11.325C12.5852 11.4758 12.2543 11.6969 11.9757 11.9755C11.697 12.2542 11.476 12.585 11.3251 12.9491C11.1743 13.3132 11.0967 13.7034 11.0967 14.0975C11.0967 14.4916 11.1743 14.8818 11.3251 15.2459C11.476 15.61 11.697 15.9409 11.9757 16.2195L19.7577 23.9995L11.9997 31.7635C11.6954 32.0355 11.4498 32.3667 11.278 32.7368C11.1061 33.107 11.0116 33.5083 11.0002 33.9162C10.9888 34.3242 11.0607 34.7301 11.2116 35.1093C11.3625 35.4885 11.5891 35.8329 11.8777 36.1215C12.1663 36.41 12.5107 36.6367 12.8899 36.7876C13.269 36.9385 13.675 37.0104 14.0829 36.999C14.4909 36.9876 14.8922 36.893 15.2624 36.7212C15.6325 36.5493 15.9637 36.3038 16.2357 35.9995L23.9997 28.2415L31.7557 35.9995C32.3185 36.5623 33.0818 36.8785 33.8777 36.8785C34.6736 36.8785 35.4369 36.5623 35.9997 35.9995C36.5625 35.4367 36.8786 34.6734 36.8786 33.8775C36.8786 33.0816 36.5625 32.3183 35.9997 31.7555L28.2417 23.9995Z"
              fill="white"
            />
          </svg>
        </div>
        <div className="subt-inner-mid">
          <div className="subt-mid-text" style={{ fontSize: "14px" }}>
            Task Status : {data.status}
            <br />( Don't Do anything if status is already Approved or
            rejected.... <br />
            If you get any such entries Inform me )
          </div>
          <div className="subt-mid-text">Feedback</div>

          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="Feedback"
          />
        </div>
        <div className="subt-cta">
          <div
            className={`subt-inner-cta ${disabled && "disable-btn"}`}
            onClick={() => submitTask("approved")}
          >
            Approve
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
            >
              <path
                d="M17.561 9.525L13.975 5.939C13.6936 5.65774 13.312 5.49978 12.9141 5.49988C12.5163 5.49997 12.1348 5.65811 11.8535 5.9395C11.5722 6.2209 11.4143 6.6025 11.4144 7.00036C11.4145 7.39822 11.5726 7.77974 11.854 8.061L14.293 10.5H5.5C5.10218 10.5 4.72064 10.658 4.43934 10.9393C4.15804 11.2206 4 11.6022 4 12C4 12.3978 4.15804 12.7794 4.43934 13.0607C4.72064 13.342 5.10218 13.5 5.5 13.5H14.293L11.854 15.939C11.5726 16.2203 11.4145 16.6018 11.4144 16.9997C11.4143 17.3975 11.5722 17.7791 11.8535 18.0605C12.1348 18.3419 12.5163 18.5 12.9141 18.5001C13.312 18.5002 13.6936 18.3423 13.975 18.061L17.561 14.475C18.2162 13.818 18.5842 12.9279 18.5842 12C18.5842 11.0721 18.2162 10.182 17.561 9.525Z"
                fill="#131612"
              />
            </svg>
          </div>

          <div
            className={`subt-re ${disabled && "disable-btn"}`}
            onClick={() => {
              submitTask("rejected");
            }}
          >
            Reject
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
            >
              <path
                d="M17.561 9.525L13.975 5.939C13.6936 5.65774 13.312 5.49978 12.9141 5.49988C12.5163 5.49997 12.1348 5.65811 11.8535 5.9395C11.5722 6.2209 11.4143 6.6025 11.4144 7.00036C11.4145 7.39822 11.5726 7.77974 11.854 8.061L14.293 10.5H5.5C5.10218 10.5 4.72064 10.658 4.43934 10.9393C4.15804 11.2206 4 11.6022 4 12C4 12.3978 4.15804 12.7794 4.43934 13.0607C4.72064 13.342 5.10218 13.5 5.5 13.5H14.293L11.854 15.939C11.5726 16.2203 11.4145 16.6018 11.4144 16.9997C11.4143 17.3975 11.5722 17.7791 11.8535 18.0605C12.1348 18.3419 12.5163 18.5 12.9141 18.5001C13.312 18.5002 13.6936 18.3423 13.975 18.061L17.561 14.475C18.2162 13.818 18.5842 12.9279 18.5842 12C18.5842 11.0721 18.2162 10.182 17.561 9.525Z"
                fill="#131612"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Givefeedback;
