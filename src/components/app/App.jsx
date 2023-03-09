// підключаємо компоненти з папок з компонентами тобто рендерім

import { Profile } from 'components/profile/Profile'
import { Statistics } from 'components/statistics/Statistics'

//підключаємо папки з  масивами даних стосовно користувача тощо
import data from 'serverBase/data.json'

import user from 'serverBase/user.json'

//  експортуємо та рендерім у браузер
export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      {/* <Statistics title="Upload stats" stats={data} /> */}
      <Statistics stats={data} />
      {/* <FriendList friends={friends} />
      <TransactionHistory items={transactions} /> */}
    </>
  );
}

