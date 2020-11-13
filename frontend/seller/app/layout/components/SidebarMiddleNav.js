import React from 'react'

import { SidebarMenu } from './../../components'

export const SidebarMiddleNav = () => (
  <SidebarMenu>
    <SidebarMenu.Item
      icon={<i className="fa fa-fw fa-home"></i>}
      title="Inicio"
      to="/"
    />
    {/* -------- Mi Perfil ---------*/}
    <SidebarMenu.Item
      icon={<i className="fa fa-fw fa-user"></i>}
      title="Mi Perfil"
      to="/profile"
    />

    {/* -------- Productos ---------*/}
    <SidebarMenu.Item
      icon={<i className="fa fa-fw fa-boxes"></i>}
      title="Productos"
    >
      <SidebarMenu.Item title="Ver todos" to="/products" exact />
      <SidebarMenu.Item title="Crear producto" to="/products/create" exact />
      <SidebarMenu.Item title="Inventario" to="/products/inventory" exact />
    </SidebarMenu.Item>

    {/* -------- Pedidos ---------*/}
    <SidebarMenu.Item
      icon={<i className="fa fa-fw fa-money-bill"></i>}
      title="Pedidos"
      to="/orders"
    />

    {/* -------- Ventas ---------*/}
    <SidebarMenu.Item
      icon={<i className="fa fa-fw fa-money-bill"></i>}
      title="Ventas"
      to="/sales"
    />

    {/* -------- Pagos ---------*/}
    <SidebarMenu.Item
      icon={<i className="fa fa-fw fa-money-bill"></i>}
      title="Pagos"
      to="/payments"
    />

    {/* -------- Estadisticas ---------*/}
    <SidebarMenu.Item
      icon={<i className="fas fa-fw fa-chart-bar"></i>}
      title="Estadísticas"
      to="/stats"
    />

    {/* -------- Métodos de envío ---------*/}
    <SidebarMenu.Item
      icon={<i className="fa fa-fw fa-truck"></i>}
      title="Métodos de envío"
      to="/shipping"
    />

    {/* -------- Preferencias ---------*/}
    <SidebarMenu.Item
      icon={<i className="fa fa-fw fa-sliders"></i>}
      title="Preferencias"
      to="/preferences"
    />
  </SidebarMenu>
)
