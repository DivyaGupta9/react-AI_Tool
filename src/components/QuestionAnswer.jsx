import Answer from "./Answer";

const QuestionAnswer = ({ item, index }) => {
  return (
    <>
      <div
        key={index + Math.random()}
        className={item.type == "question" ? "flex justify-end" : ""}
      >
        {item.type == "question" ? (
          <li
            key={index + Math.random()}
            className="text-right   border-8 dark:border-zinc-600 dark:bg-zinc-600 bg-red-50 border-red-50 rounded-tl-3xl rounded-bl-3xl rounded-br-3xl  w-fit "
          >
            <Answer
              ans={item.text}
              totalResult={1}
              index={index}
              type={item.type}
            />
          </li>
        ) : (
          item.text.map((ansItem, ansIndex) => (
            <li key={index + Math.random()} className="text-left ">
              <Answer
                ans={ansItem}
                totalResult={item.length}
                index={ansIndex}
                type={item.type}
              />
            </li>
          ))
        )}
      </div>
    </>
  );
};
export default QuestionAnswer;
