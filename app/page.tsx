// import AddNewRecord from '@/components/AddNewRecord';
// import AIInsights from '@/components/AIInsights';
// import ExpenseStats from '@/components/ExpenseStats';
import Guest from '@/components/Guest';
// import RecordChart from '@/components/RecordChart';
// import RecordHistory from '@/components/RecordHistory';
import { currentUser } from '@clerk/nextjs/server';

export default async function HomePage() {
  const user = await currentUser();
  if (!user) {
    return <Guest />;
  }
  return (
    <main className='bg-gray-100  text-gray-800  font-sans min-h-screen transition-colors duration-300'>
      {/* Mobile-optimized container with responsive padding */}
      <div className='max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-4 sm:py-6 lg:py-8'>
        {/* Mobile-first responsive grid */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6'>
          {/* Left Column - Stacked on mobile */}
          <div className='space-y-4 sm:space-y-6'>
            {/* Welcome section with improved mobile layout */}
            <div className='bg-white/80  backdrop-blur-sm p-4 sm:p-6 lg:p-8 rounded-2xl shadow-xl border border-gray-100/50  hover:shadow-2xl flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6'>
              {/* User Image - responsive sizing */}
              <div className='relative flex-shrink-0'>
                <img
                  src={user.imageUrl}
                  alt={`${user.firstName}&#39;s profile`}
                  className='w-16 h-16 sm:w-20 sm:h-20 rounded-2xl border-2 border-white dark:border-gray-600 shadow-lg'
                />
                <div className='absolute -bottom-1 -right-1 w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-r from-amber-400 to-amber-500 rounded-full border-2 border-white  flex items-center justify-center'>
                  <span className='text-black text-xs'>✓</span>
                </div>
              </div>

              {/* User Details - responsive text and layout */}
              <div className='flex-1 text-center sm:text-left'>
                <div className='flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-start gap-2 sm:gap-3 mb-3'>
                  <div className='w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-orange-500 via-amber-500 to-yellow-500 rounded-xl flex items-center justify-center shadow-lg'>
                    <span className='text-black text-sm sm:text-lg'>👋</span>
                  </div>
                  <h2 className='text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 '>
                    Welcome Back, {user.firstName}!
                  </h2>
                </div>
                <p className='text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 max-w-md mx-auto sm:mx-0'>
                  Here&#39;s a quick overview of your recent expense activity.
                  Track your spending, analyze patterns, and manage your budget
                  efficiently!
                </p>
                {/* Mobile-optimized badge grid */}
                <div className='flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center sm:justify-start'>
                  <div className='bg-gradient-to-r from-orange-50 to-amber-50  border border-orange-100 px-3 py-2 rounded-xl flex items-center gap-2 justify-center sm:justify-start'>
                    <div className='w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-r from-orange-500 to-amber-500 rounded-lg flex items-center justify-center flex-shrink-0'>
                      <span className='text-white text-xs'>📅</span>
                    </div>
                    <div className='text-center sm:text-left'>
                      <span className='text-xs font-medium text-gray-500 block'>
                        Joined
                      </span>
                      <span className='text-sm font-semibold text-gray-800 '>
                        {new Date(user.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                  <div className='bg-gradient-to-r from-amber-50 to-orange-50  border border-amber-100  px-3 py-2 rounded-xl flex items-center gap-2 justify-center sm:justify-start'>
                    <div className='w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg flex items-center justify-center flex-shrink-0'>
                      <span className='text-white text-xs'>⚡</span>
                    </div>
                    <div className='text-center sm:text-left'>
                      <span className='text-xs font-medium text-gray-500 block'>
                        Last Active
                      </span>
                      <span className='text-sm font-semibold text-gray-800 '>
                        {user.lastActiveAt
                          ? new Date(user.lastActiveAt).toLocaleDateString()
                          : 'Today'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Add New Expense */}
            {/* <AddNewRecord /> */}
          </div>

          {/* Right Column - Stacked below on mobile */}
          <div className='space-y-4 sm:space-y-6'>
            {/* Expense Analytics */}
            {/* <RecordChart /> */}
            {/* <ExpenseStats /> */}
          </div>
        </div>

        {/* Full-width sections below - mobile-friendly spacing */}
        <div className='mt-6 sm:mt-8 space-y-4 sm:space-y-6'>
          {/* <AIInsights /> */}
          {/* <RecordHistory /> */}
        </div>
      </div>
    </main>
  );
}