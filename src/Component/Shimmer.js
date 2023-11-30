const Shimmer = () => {
  return (
    <div className="shimmer-container">
      {Array(15)
        .fill("")
        .map((e, index) => (
          <div class="border border-blue-300 shadow rounded-md p-6 max-w-sm w-72 h-72 mt-14">
            <div class="animate-pulse flex space-x-4">
              {/* <div class="rounded-full bg-slate-700 h-10 w-10"></div> */}
              <div class="flex-1 space-y-1 py-1">
                {/* <div class="h-14 bg-slate-700 rounded"></div> */}
                <div class="space-y-1">
                  {/* <div class="grid grid-cols-3 gap-4">
                    <div class="h-14 bg-slate-700 rounded col-span-2"></div>
                    <div class="h-14 bg-slate-700 rounded col-span-1"></div>
                  </div> */}
                  <div class="h-32 bg-slate-700 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
