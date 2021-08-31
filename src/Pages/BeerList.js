import React, { forwardRef, useEffect, useState } from 'react'
import { useHistory } from "react-router";
import MaterialTable, { MTableToolbar } from 'material-table'
import { useSelector, useDispatch } from 'react-redux';
import { setColumns } from '../Modules/actions';
import ChevronRight from '@material-ui/icons/ChevronRight';
import SimpleModal from '../Components/SimpleModal'

const BeerList = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { beerList, columnList } = useSelector(state => state);
  const tableIcons = { DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />) };
  const [displayList, setDisplayList] = useState(beerList);
  const [filter, setFilter] = useState([]);
  const handleColumnDrag = (sourceIndex, destinationIndex) => {
    const newColumnList = columnList;
    const moved = newColumnList[sourceIndex];
    newColumnList.splice(sourceIndex, 1);
    newColumnList.splice(destinationIndex, 0, moved);

    dispatch(setColumns(newColumnList));
  }

  const handleChange = (e) => {
    const category = e.currentTarget.value;
    if (filter.includes(category)) {
      setFilter(filter.filter(el => el !== category));
    } else {
      setFilter([...filter, category]);
    }
  }

  useEffect(() => {
    console.log(filter)
  }, [filter])

  const showFiltered = () => {
    console.log(filter.length);
    if (filter.length === 4) {
      console.log('filter all')
      setDisplayList(beerList);
    } else if (filter.length === 1) {
      console.log('filter one')
      setDisplayList(beerList.filter(el => el.category === filter[0]));
    } else if (!filter.length) {
      console.log('filter none')
      setDisplayList([]);
    } else {
      console.log('filter two or three')
      setDisplayList(beerList.filter(el => filter.includes(el.category)));
    }
  }

  const expandClick = (e) => {
    e.currentTarget.previousSibling.click();
  }
  
  return (
    <div>
      <button onClick={() => history.push('/home')}>back home</button>
      <MaterialTable
          icons={tableIcons}
          columns={columnList}
          data={displayList}
          title="Beer List"
          onColumnDragged={handleColumnDrag}
          options={{
            search: false,
          }}
          components={{
            Toolbar: props => (
              <div>
                <MTableToolbar {...props} />
                <input type="checkbox"
                  name="0%~5%"
                  value="1"
                  checked={filter.includes('1')}
                  onChange={e => handleChange(e)} />
                <label htmlFor="0%~5%" onClick={e => expandClick(e)}> 0% ~ 5%</label>
                <input type="checkbox"
                  name="5%~10%"
                  value="2"
                  checked={filter.includes('2')}
                  onChange={e => handleChange(e)} />
                <label htmlFor="5%~10%" onClick={e => expandClick(e)}> 5% ~ 10%</label>
                <input type="checkbox"
                  name="10%~15%"
                  value="3"
                  checked={filter.includes('3')}
                  onChange={e => handleChange(e)} />
                <label htmlFor="10%~15%" onClick={e => expandClick(e)}> 10% ~ 15%</label>
                <input type="checkbox"
                  name="15%+"
                  value="4"
                  checked={filter.includes('4')}
                  onChange={e => handleChange(e)} />
                <label htmlFor="15%+" onClick={e => expandClick(e)}>{' \> 15%'}</label>
                <button onClick={() => showFiltered()}>show filtered</button>
              </div>
            ),
          }}
        />
    </div>
  )
}

export default BeerList
