// підключаємо компоненти з папок з компонентами тобто рендерім

import { Profile } from 'components/profile/Profile';
import { Statistics } from 'components/statistics/Statistics';
// import { FriendList } from 'components/friendList/FriendList';
// import { TransactionHistory } from 'components/transactionHistory/TransactionHistory';
//підключаємо папки з  масивами даних стосовно користувача тощо
import data from 'serverBase/data.json';
// import friends from 'serverBase/friends.json';
// import transactions from 'serverBase/transactions.json';
import user from 'serverBase/user.json';

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

// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
