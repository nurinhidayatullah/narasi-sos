<template>
    <div class="popup-mobile-menu popup-mobile-visiable">
        <div class="mobile-menu-overlay" @click="$emit('togglenav')"></div>
        <div class="inner">
            <div class="menu-content">
                <MobileNavigation @togglenav="$emit('togglenav')" />
            </div>
        </div>
    </div>
</template>