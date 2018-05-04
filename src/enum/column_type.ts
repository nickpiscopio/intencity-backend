/**
 * This is the enumeration for the column types in postgres.
 *
 * Documentation: https://www.postgresql.org/docs/9.1/static/datatype-numeric.html
 */
export enum ColumnType {
    serial,
    integer,
    smallint,
    bigint,
    decimal,
    varchar,
    char
}