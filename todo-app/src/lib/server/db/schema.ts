import { pgTable, serial, varchar, text, integer } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';

export const Users = pgTable('users', {
    id: serial('id').primaryKey(),
    username: varchar( "username", { length: 15}).notNull(),
    password: text('password').notNull()
})

export const Todos = pgTable('todos', {
    id: serial('id').primaryKey(),
    description: varchar("description", {length: 100}).notNull(),
    userid: integer('user_id').references(() => Users.id).notNull(),
})

export const userRelations = relations( Users, ({many}) => ({
    todos: many(Todos)
}))

export const postRelations = relations(Todos, ({one}) => ({
    author: one( Users, {
        fields: [Todos.userid],
        references: [Users.id],
    })
}))