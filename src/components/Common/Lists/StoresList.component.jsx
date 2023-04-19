import React, {Fragment} from 'react';
import Subtitle from './../Subtitle/Subtitle.component';
import "./Lists.css";

const StoreList = ({stores}) => (
  <Fragment>
    <Subtitle text="Zakup grę tutaj" />
    <ul className="list list--mt">
      {stores.map((store) => (
        <li className="list__item" key={store.id}>
          <a
            href={`https://${store.store.domain}`}
            target="_blank"
          >
            <img
              src={require(`./../../../assets/images/${store.store.slug}.png`)}
              alt={store.name}
              className="list__store-logo"
            />
          </a>
        </li>
      ))}
    </ul>
  </Fragment>
)
 
export default StoreList;
