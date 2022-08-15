import React, { Component } from 'react'

export class Categories extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categories: [
                {
                    key: 'all',
                    name: 'Всё'
                },
                {
                    key: 'complect',
                    name: 'Комплекты'
                },
                {
                    key: 'comods',
                    name: 'Комоды'
                },
                {
                    key: 'sofa',
                    name: 'Кровати'
                },
                {
                    key: 'shkaf',
                    name: 'Шкафы'
                },
                {
                    key: 'table',
                    name: 'Столы'
                },
                {
                    key: 'chairs',
                    name: 'Стулья'
                }
            ]
        }
    }

    render() {
        return (
            <div className='categories'>
                {this.state.categories.map(el => (
                    <div key={el.key} onClick={() => this.props.chooseCategory(el.key)}>{el.name}</div>
                ))}
            </div>
        )
    }
}

export default Categories