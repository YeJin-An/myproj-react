function DbugStates(props) {
  return (
    <>
      <div>
        <pre claassName="text-xs bg-gray-100 p-1 border-gray-400 overflow-x-scroll h-40">
          {JSON.stringify(props, null, 2)}
        </pre>
      </div>
    </>
  );
}

export default DbugStates;
