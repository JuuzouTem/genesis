// src/hooks/useTaskTiming.js

import { useMemo } from 'react';
import { useCurrentTime } from './useCurrentTime';

// Zamanı parse eden fonksiyon (Hata kontrolü ile)
const parseStandardTime = (timeStr) => {
    try {
        const [start, end] = timeStr.split('-');
        const [startH, startM] = start.split(':').map(Number);
        const [endH, endM] = end.split(':').map(Number);

        const startTime = new Date();
        startTime.setHours(startH, startM, 0, 0);

        const endTime = new Date();
        endTime.setHours(endH, endM, 0, 0);
        
        return { startTime, endTime };
    } catch (error) {
        return { startTime: null, endTime: null };
    }
};

// Görev zamanlamasını yöneten ana hook
export const useTaskTiming = (timeString, isCompleted) => {
    const currentTime = useCurrentTime();

    const timingDetails = useMemo(() => {
        let type = 'STANDARD';
        let status = 'available';
        let displayTime = timeString;
        let hasTimer = true;
        
        // Görev türünü belirle
        switch (timeString) {
            case 'Tüm Gün':
            case 'Kalan Gün':
                type = 'ALL_DAY';
                hasTimer = false;
                displayTime = 'Gün Boyu';
                break;
            case 'Akşam':
                type = 'EVENING';
                hasTimer = false;
                displayTime = 'Akşam';
                break;
            case 'Aynı Döngü':
                type = 'REPEATING_BLOCK';
                hasTimer = false;
                displayTime = 'Tekrar Bloğu';
                break;
            default:
                type = 'STANDARD';
                hasTimer = true;
        }

        // Durumu hesapla
        if (isCompleted) {
            status = 'completed';
        } else if (type === 'STANDARD') {
            const { startTime, endTime } = parseStandardTime(timeString);
            if (startTime && currentTime < startTime) {
                status = 'locked';
            } else if (endTime && currentTime > endTime) {
                status = 'missed';
            } else {
                status = 'available';
            }
        } else if (type === 'EVENING') {
            // Akşam görevini 18:00'dan sonra aktif yapalım
            const eveningStart = new Date();
            eveningStart.setHours(18, 0, 0, 0);
            if (currentTime < eveningStart) {
                status = 'locked';
            } else {
                status = 'available';
            }
        } else {
            // ALL_DAY, REPEATING_BLOCK gibi görevler her zaman 'available'
            status = 'available';
        }

        return { type, status, displayTime, hasTimer };

    }, [timeString, isCompleted, currentTime]);

    return timingDetails;
};